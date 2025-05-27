import { Box, Typography, Button } from '@mui/joy';

const Hero = () => {
  return (
     <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 4,
        bgcolor: 'background.body',
      }}
    >
      <Typography level="h1" sx={{ mb: 2 }}>
        Welcome to My Website
      </Typography>
      <Typography level="body-lg" sx={{ mb: 3, maxWidth: 600 }}>
        We build clean, fast, and modern web solutions tailored to your needs.
      </Typography>
      <Button size="lg" variant="solid" color="primary">
        Get Started
      </Button>
    </Box>
  )
}

export default Hero