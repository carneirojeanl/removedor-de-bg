import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import LoadingState from './LoadingState';

const NoBgImageModal = (props)=>{
    const {openModal, closeModal, imageUrl, loading } = props;
    const handleDownload = ()=> {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'no-bg-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        closeModal();
    };

    return(
        <Modal open={openModal} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {loading ? <LoadingState/> : (
            <Card sx={{width: '60%', height: '90%', backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
                <CardContent sx={{width: '100%', height: '100%', display: 'grid', gridTemplateRows: '3fr 0.5fr', backgroundImage: `url('noBg.png')`}}>
                    { imageUrl && 
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'start', overflow: 'hidden'}}>
                        <img src={imageUrl} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}/>
                    </div>}
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Button sx={{backgroundColor: '#f5443b'}} variant="contained" onClick={closeModal} startIcon={<DeleteOutlineRoundedIcon/>}>
                            Descartar
                        </Button>
                        <Button variant="contained" onClick={handleDownload} startIcon={<CloudUploadIcon/>}>
                            Download
                        </Button>
                    </div>
                </CardContent>
            </Card> )}
        </Modal>
    )
};
export default NoBgImageModal;