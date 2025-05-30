import { Box } from '@mui/joy';
import { useLang } from '../../../LangContext';


const Language = ({ language }) => {
    const { setLang } = useLang();

    const handleClick = () => {
        setLang(language.code);
    };

    return (
        <Box
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                '&:hover': {
                    opacity: 0.8
                },
                transition: 'opacity 0.2s ease-in-out'
            }}
        >
            <img
                src={language.flag}
                alt="flag"
                style={{
                    height: '20px',
                    width: 'auto',
                    maxWidth: '100%',
                    display: 'block'
                }}
            />
        </Box>
    )
}

export default Language