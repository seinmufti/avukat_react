import { Button } from '@mui/joy';


const NavbarItem = ( {item} ) => {
    return (
        <Button 
            variant="plain" 
            sx={{ 
                color: 'white',
                fontWeight: 500,
                '&:hover': {
                    color: 'primary.400',
                    bgcolor: 'transparent'
                },
                transition: 'color 0.2s ease-in-out'
            }}
        >
            {item}
        </Button>
    )
}

export default NavbarItem