import { Box, Typography } from '@mui/joy';
import Service from './Service';


const services = [{
  "name": "plumbing",
  "id": 1,
},
{
  "name": "hammering",
  "id": 2,
},]

const Services = () => {
  return (
    <Box component="section" sx={{
      px: 4,
      pb: 3,}}>
      <Typography level="h2" sx={{
        textAlign: 'center',
        mb: 2,
        pb: 2,
      }}>
        Our Services
      </Typography>
      <Box
        sx={{
          px: 4,
          maxWidth: 1000,
          mx: 'auto',
          display: 'flex',
          gap: 3,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {services.map(service => (
          <Service key={service.id} service={service} />
        ))}
      </Box>
    </Box>
  )
}

export default Services