import { Box, Typography } from '@mui/joy';

const Service = ({ name, icon }) => {
  const Icon = icon;

  return (
    <Box
      sx={{
        bgcolor: 'background.body',
        boxShadow: 'sm',
        borderRadius: 'md',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'neutral.200',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--joy-palette-primary-400) 0%, var(--joy-palette-primary-600) 100%)',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease-in-out',
        },
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 'lg',
          borderColor: 'primary.200',
          '&::before': {
            transform: 'scaleX(1)',
          },
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'primary.50',
          borderRadius: '50%',
          p: 2.5,
          mb: 3,
          transition: 'all 0.3s ease-in-out',
          '& svg': {
            fontSize: '2.75rem',
            color: 'primary.500',
            transition: 'all 0.3s ease-in-out',
          },
          '&:hover': {
            bgcolor: 'primary.400',
            transform: 'rotate(5deg)',
            '& svg': {
              color: 'white',
            }
          }
        }}
      >
        <Icon />
      </Box>
      <Typography
        level="h4"
        sx={{
          mb: 2,
          color: 'neutral.800',
          fontSize: '1.25rem',
          fontWeight: 600,
          letterSpacing: '0.5px',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '40px',
            height: '2px',
            bgcolor: 'primary.200',
          }
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Service;