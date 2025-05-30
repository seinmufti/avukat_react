import { extendTheme } from '@mui/joy/styles';


const createTheme = (lang) => {
  const isArabic = lang === 'ar';
  const isKurdish = lang === 'kr';

  return extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            50: '#f7f3f0',
            100: '#ebe0d7',
            200: '#d4bba6',
            300: '#b6906d',
            400: '#B66340',
            500: '#a85937',
            600: '#954e2f',
            700: '#7a3f24',
            800: '#5e2f1b',
            900: '#462318',
          },
          neutral: {
            50: '#f8f9fa',
            100: '#f1f3f5',
            200: '#e9ecef',
            300: '#dee2e6',
            400: '#ced4da',
            500: '#adb5bd',
            600: '#868e96',
            700: '#495057',
            800: '#343a40',
            900: '#212529',
          },
        },
      },
    },
    fontFamily: {
      display: isArabic
        ? "'Cairo', sans-serif"
        : isKurdish
          ? "'Noto Sans Arabic', sans-serif"
          : "'Playfair Display', var(--joy-fontFamily-fallback)",
      body: isArabic
        ? "'Cairo', sans-serif"
        : isKurdish
          ? "'Noto Sans Arabic', sans-serif"
          : "'Inter', var(--joy-fontFamily-fallback)",
    },
    components: {
      JoyButton: {
        styleOverrides: {
          root: {
            borderRadius: '2px',
            transition: 'all 0.2s ease-in-out',
          },
        },
      },
    },
  });
};

export default createTheme;
