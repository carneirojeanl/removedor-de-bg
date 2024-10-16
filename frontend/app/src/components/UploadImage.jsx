import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import NoBgImageModal from './NoBgImageModal';
import ErrorState from './ErrorState';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const cardContentCss = {
    display:'flex', 
    justifyContent:'space-between', 
    gap:'80px',
};

const greetingMessageCss = {
    display: 'flex', 
    gap: '8px'
};


const UploadImage = ()=>{
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleNewFile = (file) => {
        setLoading(true);
        setOpenModal(true)
        const formData = new FormData();
        formData.append('file', file)
        fetch('http://localhost:8085/upload-image', {
            method: 'POST',
            body: formData
        }).then((res)=> res.blob()).then((blob)=> {
            const newImageUrl = URL.createObjectURL(blob)
            setImageUrl(newImageUrl)
            setLoading(false)
        })
        .catch((error) => {
            setOpenModal(false)
            setLoading(false);
            setError(true);
        })
    };
    const closeModal = () => setOpenModal(false);

    return(
        <Card variant='outlined'>
            {error && <ErrorState/>}
            <CardContent sx={cardContentCss}>
                <div>
                    <div style={greetingMessageCss}>
                        <Typography variant='h6'>
                            Olá!
                        </Typography>
                        <WavingHandRoundedIcon sx={{color: '#facd64'}}/>
                    </div>
                    <Typography sx={{fontSize: '0.9rem'}}>
                        Faça upload de uma imagem para começar. Nós removeremos o fundo automaticamente.
                    </Typography>
                </div>
                <Button component='label' variant='contained' size='small' startIcon={<CloudUploadIcon />}>
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => {
                            handleNewFile(event.target.files[0])
                        }}
                        multiple
                    />
                    Upload
                </Button>
            </CardContent>
            <NoBgImageModal openModal={openModal} loading={loading} imageUrl={imageUrl} closeModal={closeModal}/>
        </Card>
    )
};

export default UploadImage;