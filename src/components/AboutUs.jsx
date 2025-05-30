import { Box, Typography } from '@mui/joy';
import translations from '../translations';
import { useLang } from '../LangContext';

const AboutUs = () => {
  const presentTranslations = translations.sections.aboutUs
  const { lang } = useLang();

  return (
    <Box
      component="section"
      id='about'
      sx={{
        px: 4,
        py: 8,
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
        {/* Title */}
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
          {presentTranslations[lang]}
        </Typography>

        {/* Description */}
        <Typography
          level="body-lg"
          sx={{
            color: 'neutral.700',
            lineHeight: 1.8,
            maxWidth: '900px',
            mx: 'auto',
            minHeight: { xs: '190px', sm: '140px', md: '100px' },
          }}
        >
          {presentTranslations.contents.description[lang]}
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutUs