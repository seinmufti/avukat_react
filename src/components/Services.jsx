import { Box, Typography, Container, Grid } from '@mui/joy';
import Service from './Service';
import translations from '../translations';
import { useLang } from '../LangContext';

const Services = () => {
  const presentTranslations = translations.sections.services;
  const { lang } = useLang();

  return (
    <Box
      component="section"
      id='services'
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 10, md: 12 },
        bgcolor: 'neutral.100',
        position: 'relative',
        minHeight: '750px',
        height: '750px',
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
          minHeight: '600px',
          height: '600px',
          py: 2,
        }}
      >
        <Typography
          level="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600,
            position: 'relative',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
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

        <Grid
          container
          spacing={4}
          sx={{
            mt: 2,
            minHeight: '450px',
            height: '450px',
            pb: 4,
          }}
        >
          {presentTranslations.services.map((service, index) => (
            <Grid key={index} xs={6} md={4}>
              <Service name={service[lang]} icon={service.icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;