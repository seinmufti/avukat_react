import { Button } from '@mui/joy';


const NavbarItem = ( {item} ) => {
    return (
        <Button 
            variant="plain" 
            sx={{ color: 'white' }}
        >
            {item}
        </Button>
    )
}

export default NavbarItem