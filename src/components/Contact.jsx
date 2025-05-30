import { Box, Button, Typography, Input, Textarea } from '@mui/joy';
import translations from '../translations';
import { useLang } from '../LangContext';

const Contact = () => {
  const presentTranslations = translations.sections.contact
  const { lang } = useLang();

  return (
    <Box 
      component="section" 
      id='contact'
      sx={{
        px: 4,
        py: 4,
        bgcolor: 'neutral.50',
        position: 'relative',
        minHeight: '650px',
        height: '650px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, var(--joy-palette-primary-400) 0%, var(--joy-palette-primary-600) 100%)',
          opacity: 0.3,
        }
      }}
    >
      <Typography 
        level="h2" 
        sx={{
          textAlign: 'center',
          mb: 6,
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
      <Box
        dir={lang === "en" ? "ltr" : "rtl"}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted!');
        }}
        sx={{
          minWidth: {xs: '100%', md: '50%'},
          maxWidth: '800px',
          mx: 'auto',
          p: 5,
          bgcolor: 'background.body',
          boxShadow: 'md',
          borderRadius: 'md',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          position: 'relative',
          border: '1px solid',
          borderColor: 'neutral.200',
          minHeight: '400px',
          height: '400px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, var(--joy-palette-primary-400) 0%, var(--joy-palette-primary-600) 100%)',
          },
        }}
      >
        <Input
          name="name"
          placeholder={presentTranslations.contents.name[lang]}
          required
          size="lg"
          sx={{
            '--Input-focusedHighlight': 'var(--joy-palette-primary-400)',
            '&:hover': {
              borderColor: 'primary.300',
            }
          }}
        />
        <Input
          type="email"
          name="email"
          placeholder={presentTranslations.contents.email[lang]}
          required
          size="lg"
          sx={{
            '--Input-focusedHighlight': 'var(--joy-palette-primary-400)',
            '&:hover': {
              borderColor: 'primary.300',
            }
          }}
        />
        <Textarea
          name="message"
          placeholder={presentTranslations.contents.message[lang]}
          minRows={4}
          required
          size="lg"
          sx={{
            height: '150px',
            '--Textarea-focusedHighlight': 'var(--joy-palette-primary-400)',
            '&:hover': {
              borderColor: 'primary.300',
            }
          }}
        />
        <Button
          type="submit"
          variant="solid"
          color="primary"
          size="lg"
          sx={{
            mt: 2,
            transition: 'all 0.3s ease-in-out',
            background: 'linear-gradient(90deg, var(--joy-palette-primary-400) 0%, var(--joy-palette-primary-600) 100%)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 'md',
              background: 'linear-gradient(90deg, var(--joy-palette-primary-500) 0%, var(--joy-palette-primary-700) 100%)',
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
