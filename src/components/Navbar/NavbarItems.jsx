import { Box } from '@mui/joy';
import NavbarItem from './NavbarItem';
import translations from '../../translations';
import { useLang } from '../../LangContext';
import { useMediaQuery } from '@mui/material';


const NavbarButtons = ({ orientation = 'horizontal' }) => {
    const { lang } = useLang();
    const isMobile = useMediaQuery('(max-width:900px)');

    let presentTranslations = translations.sections;
    const reversedTranslations = Object.fromEntries(
        Object.entries(presentTranslations).reverse()
    );

    // Only display in reverse if not english, and is not mobile.
    presentTranslations = lang !== "en" && !isMobile ? reversedTranslations : presentTranslations;


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: orientation === 'vertical' ? 'column' : 'row',
                gap: 2,
                alignItems: orientation === 'vertical' ? 'stretch' : 'center',
                '& > *': {
                    width: orientation === 'vertical' ? '100%' : 'auto',
                    textAlign: orientation === 'vertical' ? 'center' : 'left',
                }
            }}>
            {Object.entries(presentTranslations).map(([key, value]) => (
                <NavbarItem key={key} section={value} />
            ))}
        </Box>
    )
}

export default NavbarButtons