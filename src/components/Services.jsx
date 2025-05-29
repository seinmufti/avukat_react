import { Box, Typography } from '@mui/joy';
import Service from './Service';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessIcon from '@mui/icons-material/Business';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const services = [{
  name: "Corporate Law",
  icon: BusinessIcon,
},
{
  name: "Criminal Law",
  icon: GavelIcon,
},
{
  name: "Family Law",
  icon: FamilyRestroomIcon,
},
{
  name: "Civil Law",
  icon: AccountBalanceIcon,
},]

const Services = () => {
  return (
    <Box component="section" sx={{
      px: 4,
      py: 12,
      bgcolor: 'neutral.100',
      position: 'relative',
    }}>
      <Typography level="h2" sx={{
        textAlign: 'center',
        mb: 8,
        fontSize: { xs: '2rem', md: '2.5rem' },
        fontWeight: 600,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '3px',
          bgcolor: 'primary.400',
        }
      }}>
        Our Services
      </Typography>
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 4,
          px: { xs: 2, sm: 6 },
        }}
      >
        {services.map(service => (
          <Service key={service.name} service={service} />
        ))}
      </Box>
    </Box>
  )
}

export default Services