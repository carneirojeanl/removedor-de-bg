import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Icon } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';

const Navbar = ()=>{
    return(
        <Box sx={{ flexGrow: 1, marginBottom: '100px' }}>
            <AppBar position="absolute" sx={{backgroundColor: '#FFFFFF'}}>
                <Toolbar>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                        <Icon>
                            <CompareOutlinedIcon sx={{color: 'black'}}/>
                        </Icon>
                        <Typography variant="h8" component="div" sx={{ color: '#121417'}}>
                            Removedor de BG
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Navbar;