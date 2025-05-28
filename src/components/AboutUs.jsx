import { Box, Typography } from '@mui/joy';

const AboutUs = ( id ) => {
  return (
    <Box
      component="section"
      sx={{
        px: 4,
        py: 12,
        bgcolor: 'neutral.50',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography 
          level="h2" 
          sx={{
            mb: 8,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              bgcolor: 'primary.400',
            }
          }}
        >
          About Us
        </Typography>
        <Typography 
          level="body-lg" 
          sx={{ 
            color: 'neutral.700',
            lineHeight: 1.8,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          We are passionate about creating impactful digital experiences. Our team
          combines creativity and technology to deliver innovative solutions that
          help your business grow.
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutUs