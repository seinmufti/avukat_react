import { Box } from '@mui/joy';
import NavbarItem from './NavbarItem';

const navbarItems = [
    {
        "name": "Home",
        "id": 1,
    },
    {
        "name": "Contact",
        "id": 2,
    },
]

const NavbarItems = () => {
    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            {navbarItems.map(item => (
                <NavbarItem key={item.id} item={item} />
            ))}
        </Box>
    )
}

export default NavbarItems