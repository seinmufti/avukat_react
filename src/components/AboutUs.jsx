import { Box, Typography, Container } from '@mui/joy';
import translations from '../translations';
import { useLang } from '../LangContext';

const AboutUs = () => {
  const presentTranslations = translations.sections.aboutUs;
  const { lang } = useLang();

  return (
    <Box
      component="section"
      id='about'
      sx={{
        bgcolor: 'neutral.50',
        position: 'relative',
        minHeight: '500px',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, var(--joy-palette-primary-400) 0%, var(--joy-palette-primary-600) 100%)',
          opacity: 0.3,
        }
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
          height: '300px',
        }}
      >
        <Typography
          level="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 10 },
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
              background: 'linear-gradient(90deg, var(--joy-palette-primary-400) 0%, var(--joy-palette-primary-600) 100%)',
            }
          }}
        >
          {presentTranslations[lang]}
        </Typography>

        <Typography
          level="body-lg"
          sx={{
            textAlign: 'center',
            color: 'neutral.700',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            minHeight: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {presentTranslations.contents.description[lang]}
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs;