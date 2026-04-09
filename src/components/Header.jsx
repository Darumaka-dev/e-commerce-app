import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';



export const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
     navigate('/');
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleClick}>
                QPICK
            </Typography>
                <IconButton>
                    <Badge badgeContent={4} color="primary">
                    <FavoriteIcon fontSize="small" />
                    </Badge>
                </IconButton>
                <IconButton>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon fontSize="small" />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
    )
}