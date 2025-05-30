import { Button } from '@mui/joy';
import { useLang } from '../../LangContext';


const NavbarItem = ( {section} ) => {
    const { lang } = useLang();

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
            {section[lang]}
        </Button>
    )
}

export default NavbarItem