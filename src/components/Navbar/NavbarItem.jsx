import { Button } from '@mui/joy';


const NavbarItem = ( {item} ) => {
    return (
        <Button 
            variant="plain" 
            sx={{ color: 'white' }}
        >
            {item.name}
        </Button>
    )
}

export default NavbarItem