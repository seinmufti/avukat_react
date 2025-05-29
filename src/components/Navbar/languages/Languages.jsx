import { Box } from '@mui/joy';
import Language from './Language';

import flagEN from '../../../assets/flags/Flag_of_the_United_States.svg';
import flagAR from '../../../assets/flags/Flag_of_Iraq.svg';
import flagKR from '../../../assets/flags/Flag_of_Kurdistan.svg';

const flags = [
    flagEN,
    flagAR,
    flagKR,
]


const Languages = () => {
    return (
        <Box sx={{ 
            display: 'flex',
            gap: 2,
            alignItems: 'center'
        }}>
            {flags.map(flag => (
                <Language key={flag} flag={flag} />
            ))}
        </Box>
    )
}

export default Languages