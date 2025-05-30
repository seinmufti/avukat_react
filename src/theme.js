import { extendTheme } from '@mui/joy/styles';


const createTheme = (lang) => {
  const isArabic = lang === 'ar';
  const isKurdish = lang === 'kr';

  return extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            50: '#fdfaf3',
            100: '#faf0d8',
            200: '#f5e1b1',
            300: '#e6c883',
            400: '#ac945c',
            500: '#c4a866',
            600: '#b39655',
            700: '#a18544',
            800: '#8f7438',
            900: '#7d632c',
          },
          neutral: {
            50: '#F7F7F7',
            100: '#E6E6E6',
            200: '#D1D1D1',
            300: '#B8B8B8',
            400: '#999999',
            500: '#808080',
            600: '#666666',
            700: '#4D4D4D',
            800: '#333333',
            900: '#1A1A1A',
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
