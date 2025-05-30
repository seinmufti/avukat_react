import { Button } from '@mui/joy';
import { useLang } from '../../LangContext';


const NavbarItem = ({ section }) => {
    const { lang } = useLang();

    const handleClick = () => {
        const element = document.getElementById(section.id);
        if (element) {
            const yOffset = -64; // adjust this to match your navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <Button
            variant="plain"
            sx={{
                color: 'white',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: '50%',
                    width: 0,
                    height: '2px',
                    backgroundColor: 'primary.400',
                    transition: 'all 0.3s ease-in-out',
                    transform: 'translateX(-50%)',
                },
                '&:hover': {
                    color: 'primary.400',
                    bgcolor: 'transparent',
                    '&::after': {
                        width: '100%',
                    }
                },
                transition: 'all 0.2s ease-in-out'
            }}
            onClick={handleClick}
        >
            {section[lang]}
        </Button>
    )
}

export default NavbarItem