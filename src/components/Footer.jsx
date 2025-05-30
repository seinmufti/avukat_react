import { Box, IconButton, Typography } from '@mui/joy';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'neutral.900',
        color: 'neutral.100',
        position: 'relative',
        py: 4,
        height: '120px',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: '1200px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, var(--joy-palette-primary-400) 50%, transparent 100%)',
          opacity: 0.8,
        }
      }}
    >
      {/* Social Media Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 3, md: 4 },
          mb: 2,
          height: '40px',
        }}
      >
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          variant="plain"
          size="lg"
          sx={{
            color: 'primary.300',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'primary.400',
              transform: 'translateY(-3px)',
              bgcolor: 'transparent',
            },
          }}
        >
          <FacebookIcon sx={{ fontSize: '1.75rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          variant="plain"
          size="lg"
          sx={{
            color: 'primary.300',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'primary.400',
              transform: 'translateY(-3px)',
              bgcolor: 'transparent',
            },
          }}
        >
          <TwitterIcon sx={{ fontSize: '1.75rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          variant="plain"
          size="lg"
          sx={{
            color: 'primary.300',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'primary.400',
              transform: 'translateY(-3px)',
              bgcolor: 'transparent',
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: '1.75rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          variant="plain"
          size="lg"
          sx={{
            color: 'primary.300',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'primary.400',
              transform: 'translateY(-3px)',
              bgcolor: 'transparent',
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: '1.75rem' }} />
        </IconButton>
      </Box>

      {/* Copyright Text - Always in English */}
      <Box
        sx={{
          textAlign: 'center',
          direction: 'ltr', // Force LTR direction for all languages
          height: '24px',
        }}
      >
        <Typography
          level="body-md"
          sx={{
            color: 'neutral.400',
            fontWeight: 300,
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            lineHeight: '24px',
          }}
        >
          © {new Date().getFullYear()} MSQadir. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
