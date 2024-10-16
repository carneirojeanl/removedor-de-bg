import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';

const HowItWorks = ()=>{
    return(
        <div>
            <Typography sx={{marginBottom: '16px'}} variant='h6'>
                Como funciona
            </Typography>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <Card variant='outlined' sx={{width: '32%', height: '8rem'}}>
                    <CardContent sx={{display:'flex', justifyContent:'space-between', gap:'80px'}}>
                    <div>
                            <UploadFileRoundedIcon/>
                            <Typography variant='h6'>
                                Upload
                            </Typography>
                            <Typography sx={{fontSize: '0.9rem'}}>
                                Faça upload da sua imagem
                            </Typography>
                    </div>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{width: '32%', height: '8rem'}}>
                    <CardContent sx={{display:'flex', justifyContent:'space-between', gap:'80px'}}>
                        <div>
                            <AutoFixHighRoundedIcon/>
                            <Typography variant='h6'>
                                Deixa com a gente
                            </Typography>
                            <Typography sx={{fontSize: '0.9rem'}}>
                                Nós removemos o fundo da imagem 
                            </Typography>
                    </div>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{width: '32%', height: '8rem'}}>
                    <CardContent sx={{display:'flex', justifyContent:'space-between', gap:'80px'}}>
                        <div>
                            <FileDownloadRoundedIcon/>
                            <Typography variant='h6'>
                                Agora é só baixar
                            </Typography>
                            <Typography sx={{fontSize: '0.9rem'}}>
                                Imagem sem fundo e sem perder a qualidade
                            </Typography>
                    </div>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
};
export default HowItWorks;