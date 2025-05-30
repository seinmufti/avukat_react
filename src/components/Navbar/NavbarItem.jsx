import { Button } from '@mui/joy';
import { useLang } from '../../LangContext';


const NavbarItem = ( {section} ) => {
    const { lang } = useLang();

    const handleClick = () => {
    const element = document.getElementById(section.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            onClick={handleClick}
        >
            {section[lang]}
        </Button>
    )
}

export default NavbarItem