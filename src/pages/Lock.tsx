import {
  Box
  // useTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'
import OneTimePassword from '../components/OneTimePassword'

const Lock = () => {
  // const theme = useTheme()
  const [qrCodePng, setQrCodePng] = useState(null)

  const user = {
    username: 'FreeUser',
    mfaEnabled: false,
    mfaSecret: null
  }

  useEffect(() => {
    window.api?.send('toMain', { command: 'generate-mfa-qr', user })
    window.api?.receive('fromMain', (args: any) => {
      if (args[0] === 'mfa-qr-code') {
        setQrCodePng(args[1])
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="calc(100vh - 150px)"
      display="flex"
    >
      <div style={{ marginBottom: '2rem' }}>
        {qrCodePng && <img src={qrCodePng} alt="MFA QR Code" />}
      </div>
      <OneTimePassword enabled />
    </Box>
  )
}

export default Lock
