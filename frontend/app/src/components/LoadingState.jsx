import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

const LoadingState = ()=> {
    return(
        <Card sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '45%', height: '30%'}}>
            <CardContent style={{display: 'grid', gridTemplateRows: '1fr 1fr', alignItems: 'center', justifyItems: 'center'}}>
                <CircularProgress size={60} />
                <Typography variant='h6' sx={{marginTop: '50px'}}>
                    Em alguns instantes sua imagem vai estar pronta
                </Typography>
            </CardContent>
        </Card> 
    )
};
export default LoadingState;