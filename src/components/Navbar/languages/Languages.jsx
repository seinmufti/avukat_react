import { Box } from '@mui/joy';
import Language from './Language';
import flagEn from '../../../assets/flags/Flag_of_the_United_States.svg';
import flagAr from '../../../assets/flags/Flag_of_Iraq.svg';
import flagKr from '../../../assets/flags/Flag_of_Kurdistan.svg';


const Languages = () => {
    const languages = [
    {
        flag: flagEn,
        code: "en",
    },
    {
        flag: flagAr,
        code: "ar",
    },
    {
        flag: flagKr,
        code: "kr",
    },
]

    return (
        <Box sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center'
        }}>

            {languages.map(language => (
                <Language key={language.code} language={language}/>
            ))}
        </Box>
    )
}

export default Languages