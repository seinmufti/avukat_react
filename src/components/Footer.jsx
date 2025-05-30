import { Box, Link, Typography, IconButton } from '@mui/joy';
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
        py: 6,
        px: { xs: 2, md: 4 },
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'neutral.800',
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          variant="plain"
          size="md"
          sx={{
            color: 'white',
            '&:hover': {
              color: 'primary.400',
              bgcolor: 'transparent',
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          variant="plain"
          size="md"
          sx={{
            color: 'white',
            '&:hover': {
              color: 'primary.400',
              bgcolor: 'transparent',
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          variant="plain"
          size="md"
          sx={{
            color: 'white',
            '&:hover': {
              color: 'primary.400',
              bgcolor: 'transparent',
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          variant="plain"
          size="md"
          sx={{
            color: 'white',
            '&:hover': {
              color: 'primary.400',
              bgcolor: 'transparent',
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography
        level="body2"
        sx={{
          color: 'neutral.400',
          fontWeight: 'md',
        }}
      >
        &copy; {new Date().getFullYear()} MSQadir. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
