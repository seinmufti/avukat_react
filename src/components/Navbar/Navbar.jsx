import { Box, IconButton } from '@mui/joy';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { useState } from 'react';
import NavbarItems from './NavbarItems';
import logo from '../../assets/logo2.png';
import Languages from './languages/Languages';
import { useMediaQuery } from '@mui/material';


const Navbar = () => {
    const isMobile = useMediaQuery('(max-width:900px)');
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <Box
            component="nav"
            sx={{
                width: '100%',
                bgcolor: 'neutral.900',
                borderBottom: '1px solid',
                borderColor: 'neutral.800',
                position: 'fixed',
                top: 0,
                zIndex: 1100,
                boxShadow: 'md',
            }}
        >
            <Box
                sx={{
                    maxWidth: 1200,
                    mx: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 2, md: 4 },
                    py: 2,
                    position: 'relative',
                }}>
                <Box
                    sx={{ marginRight: 'auto' }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            height: '40px',
                            width: 'auto',
                            maxWidth: '100%'
                        }}
                    />
                </Box>

                <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}>
                    <NavbarItems />
                </Box>

                {/* Languages */}
                {!isMobile && <Languages />}


                <IconButton
                    onClick={() => setMobileOpen(!mobileOpen)}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {mobileOpen ? <Close /> : <Menu />}
                </IconButton>
            </Box>

            {/* Mobile menu */}
            {/* Mobile menu with animation */}
            <Box
                sx={{
                    overflow: 'hidden',
                    maxHeight: mobileOpen ? '500px' : '0', // adjust maxHeight to your menu height
                    opacity: mobileOpen ? 1 : 0,
                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    bgcolor: 'neutral.900',
                    borderTop: '1px solid',
                    borderColor: 'neutral.800',
                    zIndex: 1000,
                    boxShadow: 'lg',
                }}
            >
                <Box sx={{ py: 2 }}>
                    <NavbarItems orientation="vertical" />
                    <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1, pt: 3 }}>
                        {/* If language is clicked, close the burger menu */}
                        <Languages closeMenu={isMobile ? () => setMobileOpen(false) : undefined} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar