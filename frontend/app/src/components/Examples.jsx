import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
const Examples = ()=>{
    return(
        <div>
            <Typography sx={{marginBottom: '16px'}} variant='h6'>
                Antes & Depois
            </Typography>
            <div 
                style={{display: 'grid', gridTemplateColumns: '500px 500px', 
                gridTemplateRows: 'auto auto', gap: '12px'}}
            >
                <Card>
                    <CardContent>
                        <img style={{width: '100%'}} src='dogBg.png'/>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent >
                        <img style={{width: '100%', backgroundImage: `url('noBg.png')`}} src='dogNoBgExample.png'/>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};
export default Examples;