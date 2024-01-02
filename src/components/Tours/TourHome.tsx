import { useState } from 'react'
import {
  useTheme,
  Button,
  Fab,
  MenuItem,
  ListItemIcon,
  Badge,
  Typography,
  Paper,
  Link
} from '@mui/material'
import Tour from 'reactour'
import { InfoRounded, LiveHelp } from '@mui/icons-material'
import useStore from '../../store/useStore'
import gif1 from '../../assets/navigation.gif'
import gif2 from '../../assets/quickaccess.gif'
// import plusBtnImg from '../../assets/plusBtn.png'

const steps = [
  {
    selector: '.step-zero',
    content: (
      <Paper
        sx={{
          backgroundColor: '#303032',
          boxShadow: 'none',
          backgroundImage: 'none'
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 1, color: 'white' }}>
          Welcome!
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          Join us on this guided tour to explore LedFx features and
          functionalities.
        </Typography>
      </Paper>
    ),
    style: {
      backgroundColor: '#303032',
      borderRadius: 10
    }
  },
  {
    selector: '.step-one',
    content: (
      <Paper
        sx={{
          backgroundColor: '#303030',
          boxShadow: 'none',
          backgroundImage: 'none'
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 1, color: 'white' }}>
          Navigation
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          Navigate through pages here.
          <img
            src={gif1} // Replace with the actual path or URL
            alt="GIF"
            width={290}
            style={{ paddingTop: '15px' }}
          />
        </Typography>
      </Paper>
    ),
    style: {
      backgroundColor: '#303030',
      borderRadius: 10
    }
  },
  {
    selector: '.step-two',
    content: (
      <Paper
        sx={{
          backgroundColor: '#303030',
          boxShadow: 'none',
          backgroundImage: 'none'
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 1, color: 'white' }}>
          Menu
        </Typography>
        <Typography>
          Access
          <Link
            sx={{ textDecoration: 'none' }}
            href="https://blade.hamza.stream/"
          >
            {' '}
            Tours
          </Link>
          , manage{' '}
          <Link
            sx={{ textDecoration: 'none' }}
            href="https://blade.hamza.stream/"
          >
            Host
          </Link>
          ,{' '}
          <Link
            sx={{ textDecoration: 'none' }}
            href="https://blade.hamza.stream/"
          >
            Account
          </Link>{' '}
          and{' '}
          <Link
            sx={{ textDecoration: 'none' }}
            href="https://blade.hamza.stream/"
          >
            Graph
          </Link>{' '}
          settings.
        </Typography>
      </Paper>
    ),
    style: {
      backgroundColor: '#303030',
      borderRadius: 10
    }
  },
  {
    selector: '.step-three',
    content: (
      <Paper
        sx={{
          backgroundColor: '#303030',
          boxShadow: 'none',
          backgroundImage: 'none'
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 1, color: 'white' }}>
          Quick Access
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          Select a device to manage its settings and configurations.
          <img
            src={gif2} // Replace with the actual path or URL
            alt="GIF"
            width={290}
            style={{ paddingTop: '15px' }}
          />
        </Typography>
      </Paper>
    ),
    style: {
      backgroundColor: '#303030',
      borderRadius: 10
    }
  },
  {
    selector: '.step-four',
    content: (
      <Paper
        sx={{
          backgroundColor: '#303030',
          boxShadow: 'none',
          backgroundImage: 'none'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Virtuals, Scenes & Devices
        </Typography>
        <Typography>Use Plus Button to configure the following:</Typography>
        <br />
        <Typography>
          <strong style={{ fontSize: '18px' }}>Device: </strong>
          <Link
            sx={{ textDecoration: 'none' }}
            href="https://blade.hamza.stream/page1"
          >
            Add networked LED strip
          </Link>
        </Typography>
        <Typography>
          <strong style={{ fontSize: '18px' }}>Virtual: </strong>
          <Link
            sx={{ textDecoration: 'none' }}
            href="https://blade.hamza.stream/page2"
          >
            Unify devices as virtual strip
          </Link>
        </Typography>
        <Typography>
          <strong style={{ fontSize: '18px' }}>Scene: </strong>
          <Link
            sx={{ textDecoration: 'none' }}
            href="https://blade.hamza.stream/"
          >
            Save device's active effects
          </Link>
        </Typography>
      </Paper>
    ),
    style: {
      backgroundColor: '#303030',
      borderRadius: 10
    }
  }
]

const TourHome = ({
  className,
  cally,
  variant = 'button'
}: {
  className?: string
  variant?: string
  cally?: any
}) => {
  const theme = useTheme()
  const tour = useStore((state) => state.tours.home)
  const [isTourOpen, setIsTourOpen] = useState(false)
  const setTour = useStore((state) => state.setTour)

  return (
    <>
      {variant === 'fab' ? (
        <Fab
          aria-label="guided-tour"
          className="step-zero"
          onClick={(e) => {
            setTour('home')
            cally(e)
            setIsTourOpen(true)
          }}
          style={{
            margin: '8px'
          }}
          sx={{
            bgcolor: theme.palette.primary.main,
            '&:hover': {
              bgcolor: theme.palette.primary.light
            }
          }}
        >
          <LiveHelp />
        </Fab>
      ) : variant === 'menuitem' ? (
        <MenuItem
          onClick={(e) => {
            setIsTourOpen(true)
            cally(e)
            setTour('home')
          }}
        >
          <ListItemIcon>
            <Badge variant="dot" color="error" invisible={tour}>
              <InfoRounded />
            </Badge>
          </ListItemIcon>
          Tour
        </MenuItem>
      ) : (
        <Button
          className={`step-zero ${className}`}
          onClick={() => {
            setTour('home')
            setIsTourOpen(true)
          }}
        >
          <LiveHelp sx={{ mr: '8px' }} />
          Start Tour
        </Button>
      )}
      <Tour
        steps={steps}
        accentColor={theme.palette.primary.main}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
    </>
  )
}

TourHome.defaultProps = {
  className: '',
  variant: 'button',
  cally: null
}

export default TourHome
