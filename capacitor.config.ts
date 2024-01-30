import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.blade.ledfx',
  appName: 'ledfx',
  webDir: 'build',
  server: {
    url: 'http://localhost:8100',
    cleartext: true,
    allowNavigation: ['*']
  }
}

export default config
