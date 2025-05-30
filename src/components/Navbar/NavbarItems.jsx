import { Box } from '@mui/joy';
import NavbarItem from './NavbarItem';
import translations from '../../translations';
import { useLang } from '../../LangContext';


const NavbarButtons = ({ orientation = 'horizontal' }) => {
    const { lang } = useLang();

    const reversed = Object.fromEntries(
        Object.entries(translations.sections).reverse()
    );

    const presentTranslations = lang === "en" ? translations.sections : reversed


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