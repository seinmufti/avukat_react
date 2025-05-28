import { Box, Typography, Button } from '@mui/joy';
import hero_cover from '../assets/hero_cover.jpg';

const Hero = () => {
  return (
     <Box
      sx={{
        minHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        },
        backgroundImage: `url(${hero_cover})`, // Add your image to public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography level="h1" sx={{ mb: 2, color: 'white' }}>
          Welcome to My Website
        </Typography>
        <Typography level="body-lg" sx={{ mb: 3, maxWidth: 600, color: 'white' }}>
          We build clean, fast, and modern web solutions tailored to your needs.
        </Typography>
        <Button size="lg" variant="solid" color="primary">
          Get Started
        </Button>
      </Box>
    </Box>
  )
}

export default Hero