import { Box } from '@mui/joy';

const Service = ( {service} ) => {
  return (
    <Box
          sx={{
            width: 220,
            height: 140,
            bgcolor: 'background.surface',
            boxShadow: 'md',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            typography: 'body-lg',
            textAlign: 'center',
            p: 2,
            flexShrink: 0,
          }}
        >
          Rectangle {service.name}
        </Box>
  )
}

export default Service