import {
	Container,
	Button,
	Box,
	Stack,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
} from '@mui/material';

import GradeIcon from '@mui/icons-material/Grade';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ProductCard = (props) => {
	const {
		product: { title, image, price, rating, sale },
		product,
		cart,
		setCart
	} = props;

	const addProduct = () => {
		console.log(product)
		setCart((prev) => [...prev, product])
	};

	return (
		<Card sx={{ width: 350, borderRadius: 3.75 }}>
			<FavoriteIcon sx={{ m: 2, color: '#838383' }}></FavoriteIcon>
			<CardMedia
				component="img"
				src={image}
				alt={title}
				sx={{
					objectFit: 'contain',
					height: 220,
					marginBottom: 6,
					marginTop: 2,
				}}
			/>

			<CardContent>
				<Stack>
					<Stack
						sx={{
							justifyContent: 'space-between',
						}}
						direction="row"
					>
						<Typography variant="subtitle1">{title}</Typography>
						<Typography sx={{ whiteSpace: 'pre-line', color: '#ffa542' }}>
							{sale ? sale : price} ₽{'\n'}
							{sale && (
								<span
									style={{
										textDecoration: 'line-through',
										fontSize: '13px',
										color: '#FFCE7F',
									}}
								>
									{price} ₽
								</span>
							)}
						</Typography>
					</Stack>
				</Stack>
			</CardContent>

			<CardActions
				sx={{
					marginBottom: 4,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						textAlign: 'center',
						alignItems: 'center',
						gap: 1.25,
					}}
				>
					<GradeIcon sx={{ marginRight: 'auto', color: '#ffa542' }} />
					<Box sx={{ color: '#838383', fontSize: 17, fontWeight: 500 }}>
						{rating}
					</Box>
				</Box>
				<Button onClick={addProduct} color="black">Купить</Button>
			</CardActions>
		</Card>
	);
};
