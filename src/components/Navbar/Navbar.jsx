import { Box, Button, Typography, IconButton } from '@mui/joy';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { useState } from 'react';
import logo from '../../assets/logo2.png'
import NavbarItems from './NavbarItems';


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <Box
            component="nav"
            sx={{
                width: '100%',
                bgcolor: 'neutral.900', // Changed from neutral.softBg to neutral.900
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'relative',
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 2,
                py: 2,
            }}>
                <img src={logo} alt="Logo" style={{ height: '40px', width: 'auto', maxWidth: '100%' }} />
                
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <NavbarItems />
                </Box>

                <IconButton
                    onClick={() => setMobileOpen(!mobileOpen)}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    {mobileOpen ? <Close /> : <Menu />}
                </IconButton>
            </Box>

            {/* Mobile menu */}
            <Box
                sx={{
                    display: { xs: mobileOpen ? 'block' : 'none', md: 'none' },
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    bgcolor: 'neutral.900', // Changed from neutral.softBg to neutral.900
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    zIndex: 1000,
                    boxShadow: 'md',
                    '& > *': {
                        opacity: mobileOpen ? 1 : 0,
                    }
                }}
            >
                <Box sx={{ py: 2 }}>
                    <NavbarItems orientation="vertical" />
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar