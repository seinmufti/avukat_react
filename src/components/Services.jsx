import { Box, Typography } from '@mui/joy';
import Service from './Service';
import translations from '../translations';
import { useLang } from '../LangContext';


const Services = () => {
  const presentTranslations = translations.sections.services
  const { lang } = useLang();


  return (
    <Box component="section"
    id='services'
    sx={{
      px: 4,
      py: 6,
      bgcolor: 'neutral.100',
      position: 'relative',
    }}>
      <Typography level="h2"
      sx={{
        textAlign: 'center',
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
      }}>
        {presentTranslations[lang]}
      </Typography>
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
          px: { xs: 2, sm: 6 },
        }}
      >
        {presentTranslations.services.map(service => (
          <Service key={service[lang]} name={service[lang]} icon={service.icon} />
        ))}
      </Box>
    </Box>
  )
}

export default Services