import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import {
	AppBar,
	Badge,
	Box,
	Toolbar,
	Typography,
	IconButton,
	useScrollTrigger,
} from '@mui/material';


export const Header = (props) => {

	const {cartCount} = props;

	const navigate = useNavigate();
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

	const handleClickHome = () => {
		navigate('/');
	};

	const handleClickCart = () => {
		navigate('/Cart');
	};


	return (
		<Box sx={{ flexGrow: 1, mb: 4 }}>
			<AppBar
				position="sticky"
				elevation={trigger ? 0 : 4}
				sx={{ bgcolor: '#eaeaea', color: 'black' }}
			>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, fontWeight: 600 }}
						onClick={handleClickHome}
					>
						QPICK
					</Typography>
					<IconButton>
						<Badge
							badgeContent={0}
							sx={{
								'& .MuiBadge-badge': {
									backgroundColor: '#ffa542',
									color: 'white',
								},
							}}
						>
							<FavoriteIcon fontSize="small" />
						</Badge>
					</IconButton>
					<IconButton onClick={handleClickCart}>
						<Badge
							badgeContent={cartCount}
							sx={{
								'& .MuiBadge-badge': {
									backgroundColor: '#ffa542',
									color: 'white',
								},
							}}
						>
							<ShoppingCartIcon fontSize="small" />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
