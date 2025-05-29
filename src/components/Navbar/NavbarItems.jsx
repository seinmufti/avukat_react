import { Box } from '@mui/joy';
import NavbarItem from './NavbarItem';

const navbarItems = [
    "Home",
    "About Us",
    "Services",
    "Contact",
]

const NavbarButtons = ({ orientation = 'horizontal' }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: orientation === 'vertical' ? 'column' : 'row',
            gap: 2,
            alignItems: orientation === 'vertical' ? 'stretch' : 'center',
            '& > *': {  
                width: orientation === 'vertical' ? '100%' : 'auto',
                textAlign: orientation === 'vertical' ? 'center' : 'left',
            }
        }}>
            {navbarItems.map(item => (
                <NavbarItem key={item} item={item} />
            ))}
        </Box>
    )
}

export default NavbarButtons