import { Box, Button, Typography, Input, Textarea } from '@mui/joy';
import translations from '../translations';
import { useLang } from '../LangContext';


const Contact = () => {
  const presentTranslations = translations.sections.contact
  const { lang } = useLang();

  return (
    <Box component="section" 
    sx={{
      px: 4,
      py: 12,
      bgcolor: 'neutral.50',
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
        dir= {lang === "en" ? "ltr" : "rtl"}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted!');
        }}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          p: 6,
          bgcolor: 'background.body',
          boxShadow: 'md',
          borderRadius: 'md',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            bgcolor: 'primary.400',
          },
        }}
      >
        <Input
          name="name"
          placeholder={presentTranslations.contents.name[lang]}
          required
          size="lg"
        />
        <Input
          type="email"
          name="email"
          placeholder={presentTranslations.contents.email[lang]}
          required
          size="lg"
        />
        <Textarea
          name="message"
          placeholder={presentTranslations.contents.message[lang]}
          minRows={4}
          required
          size="lg"
        />
        <Button
          type="submit"
          variant="solid"
          color="primary"
          size="lg"
          sx={{
            mt: 2,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 'md',
            }
          }}
        >
          {presentTranslations.contents.send[lang]}
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
