import { Box, Button, Typography } from '@mui/joy';
import logo from '../../assets/logo2.png'
import NavbarItems from './NavbarItems';


const Navbar = () => {
    return (
        <Box
            component="nav"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 3,
                py: 2,
                bgcolor: 'neutral.softBg',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            <img src={logo} alt="Logo" style={{ height: '40px', width: 'auto', maxWidth: '100%' }}  />
            <NavbarItems />
        </Box>
    )
}

export default Navbar