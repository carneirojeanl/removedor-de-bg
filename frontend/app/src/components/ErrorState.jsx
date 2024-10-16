import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

const ErrorState = () => {
    const [open, setOpen] = useState(true);
    return(
        <Collapse in={open}>
            <Alert variant="filled" severity="error" onClose={() => setOpen(false)}>
                Opa! Algo deu errado. Estamos trabalhando para solucionar o problema. 
            </Alert>
        </Collapse>
    )
};
export default ErrorState;