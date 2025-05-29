import { Box } from '@mui/joy';

const Language = ({flag}) => {
    return (
        <Box 
            sx={{ 
                cursor: 'pointer',
                '&:hover': {
                    opacity: 0.8
                },
                transition: 'opacity 0.2s ease-in-out'
            }}
        >
            <img
                src={flag}
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