import { Box, Typography, Button } from '@mui/joy';
import hero_cover from '../assets/hero_cover.jpg';
import { useLang } from '../LangContext';
import translations from '../translations';

const Hero = () => {
  const presentTranslations = translations.sections.home.contents;
  const { lang } = useLang();

  const handleClick = () => {
    const element = document.getElementById(translations.sections.contact.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id='home'
      sx={{
        scrollMarginTop: '60px',
        minHeight: '55vh',
        marginTop: '64px',
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
        <Typography level="body-lg" sx={{ mb: 3, maxWidth: 600, color: 'white' }}>
          {presentTranslations.title[lang]}
        </Typography>
        <Typography level="h1" sx={{ mb: 2, color: 'white' }}>
          {presentTranslations.fullName[lang]}
        </Typography>
        <Typography level="body-lg" sx={{ mb: 3, maxWidth: 600, color: 'white' }}>
          {presentTranslations.motto[lang]}
        </Typography>
        <Button size="lg" variant="solid" color="primary" onClick={handleClick}>
          {presentTranslations.scheduleButton[lang]}
        </Button>
      </Box>
    </Box>
  )
}

export default Hero