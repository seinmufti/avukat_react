import { Box, Typography } from '@mui/joy';

const Service = ( {service} ) => {
  const Icon = service.icon;

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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          bgcolor: 'primary.400',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease-in-out',
        },
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 'lg',
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
        }}
      >
        {service.name}
      </Typography>
    </Box>
  )
}

export default Service