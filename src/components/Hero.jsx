import { Box, Typography, Button, Container } from '@mui/joy';
import hero_cover from '../assets/hero_cover.jpg';
import { useLang } from '../LangContext';
import translations from '../translations';

const Hero = () => {
  const presentTranslations = translations.sections.home.contents;
  const { lang } = useLang();

  const handleClick = () => {
    const element = document.getElementById(translations.sections.contact.id);
    if (element) {
      const yOffset = -64;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      id='home'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)',
          zIndex: 1
        },
        backgroundImage: `url(${hero_cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: lang === 'en' ? 'flex-start' : 'flex-end' },
          textAlign: { xs: 'center', md: lang === 'en' ? 'left' : 'right' },
          px: { xs: 2, sm: 4 },
          minHeight: '400px',
          justifyContent: 'center',
        }}
      >
        <Typography
          level="h4"
          sx={{
            color: 'primary.200',
            mb: 1,
            fontWeight: 500,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          {presentTranslations.title[lang]}
        </Typography>

        <Typography
          level="h1"
          sx={{
            color: 'white',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.2,
            maxWidth: '800px',
          }}
        >
          {presentTranslations.fullName[lang]}
        </Typography>

        <Typography
          level="h3"
          sx={{
            color: 'neutral.200',
            mb: 4,
            maxWidth: '600px',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 400,
            fontFamily: 'body',
          }}
        >
          {presentTranslations.motto[lang]}
        </Typography>

        <Button
          size="lg"
          onClick={handleClick}
          sx={{
            bgcolor: 'primary.400',
            color: 'white',
            px: 6,
            py: 2,
            fontSize: '1.125rem',
            borderRadius: '2px',
            '&:hover': {
              bgcolor: 'primary.500',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
            boxShadow: 'md',
          }}
        >
          {presentTranslations.scheduleButton[lang]}
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;