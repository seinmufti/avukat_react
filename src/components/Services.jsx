import { Box } from '@mui/joy';
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
    <Box
      component="section"
      sx={{
        py: 8,
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
            <Service key={service.id} service={service}/>
        ))}

    </Box>
  )
}

export default Services