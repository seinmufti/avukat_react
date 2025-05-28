import { Box, Typography } from '@mui/joy';

const AboutUs = ( id ) => {
  return (
    <Box
      component="section"
      sx={{
        px: 4,
        pb: 3,
        maxWidth: 800,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography level="h2" sx={{ mb: 2 , pb: 2}}>
        About Us
      </Typography>
      <Typography level="body-md" sx={{ color: 'text.secondary' }}>
        We are passionate about creating impactful digital experiences. Our team
        combines creativity and technology to deliver innovative solutions that
        help your business grow.
      </Typography>
    </Box>
  )
}

export default AboutUs