const { app, shell } = require('electron')
const path = require('path')
const { generateMfaQr, handleVerifyOTP } = require('./otp.js')
const { coreParams, isCC, defaultCoreParams, store } = require('./core.js')
const { startInstance, stopInstance, sendStatus } = require('./instances.js')

const handlers = async (wind, subprocesses, event, parameters) => {
  console.log('ALL PARAMS', parameters)

  try {
    switch (parameters.command) {
      case 'verify_otp':
        handleVerifyOTP(event, parameters)
        break
      case 'generate-mfa-qr':
        generateMfaQr(event, parameters)
        break
      case 'get-platform':
        wind.webContents.send('fromMain', ['platform', process.platform])
        break
      case 'get-core-params':
        wind.webContents.send('fromMain', [
          'coreParams',
          coreParams[process.platform]
        ])
        sendStatus(wind, subprocesses)
        break
      case 'start-core':
        if (isCC) {
          startInstance(wind, parameters.instance, subprocesses)
        }
        break
      case 'start-core-instance':
        if (isCC) {
          startInstance(
            wind,
            parameters.instance,
            subprocesses,
            parameters.port
          )
        }
        break
      case 'stop-core-instance':
        if (isCC) {
          stopInstance(parameters.instance, subprocesses)
        }
        break
      case 'delete-core-instance':
        if (isCC) {
          Object.entries(subprocesses).forEach(([name, subpy]) => {
            if (name === parameters.instance) {
              subpy.kill()
              delete subprocesses[name]
            }
          })
          delete coreParams[process.platform][parameters.instance]
          store.set('coreParams', coreParams)
          wind.webContents.send('fromMain', [
            'coreParams',
            coreParams[process.platform]
          ])
        }
        break
      case 'delete-core-params':
        if (isCC) {
          store.set('coreParams', defaultCoreParams)
          coreParams.darwin = defaultCoreParams['darwin']
          coreParams.win32 = defaultCoreParams['win32']
          coreParams.linux = defaultCoreParams['linux']
          wind.webContents.send('fromMain', [
            'coreParams',
            defaultCoreParams[process.platform]
          ])
          app.relaunch()
          app.exit()
        }
        break
      case 'open-config':
        console.log('Open Config')
        // wind.webContents.send('fromMain', ['currentdir', path.join(path.dirname(__dirname), isDev ? 'extraResources' : '../extraResources')]);
        shell.showItemInFolder(
          path.join(app.getPath('appData'), '/.ledfx/config.json')
        )
        break
      case 'restart-client':
        app.relaunch()
        app.exit()
        break
      default:
        console.log('Command not recognized')
        break
    }
  } catch (error) {
    console.error(`Error handling command "${parameters.command}": ${error}`)
  }
}

module.exports = { handlers }
