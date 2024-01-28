import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.blade.ledfx',
  appName: 'ledfx',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
}

export default config
