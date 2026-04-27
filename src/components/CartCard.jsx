import {
	Box,
	CardHeader,
	Stack,
	Typography,
	Card,
	CardMedia,
	CardActions,
	IconButton,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useAppStyles } from '../data/ThemeStyles';

export const CartCard = (props) => {
	const {
		product: { id, title, image, price, rating, sale },
		product,
		cartItems,
		setCartItems,
	} = props;

	const { colors } = useAppStyles();
	const cartItem = cartItems.find((item) => item.id === id);
	const count = cartItem.count;

	const deleteProduct = () => {
		setCartItems(cartItems.filter((product) => product.id !== id));
	};

	const addProduct = () => {
		setCartItems(
			cartItems.map((product) =>
				product.id == id ? { ...product, count: product.count + 1 } : product,
			),
		);
	};

	const removeProduct = () => {
		if (count == 1) {
			setCartItems(cartItems.filter((product) => product.id !== id));
			return;
		}
		setCartItems(
			cartItems.map((product) =>
				product.id == id ? { ...product, count: product.count - 1 } : product,
			),
		);
	};

	const sumProduct = (sale || price) * count;

	return (
		<Card sx={{ maxWidth: 633, p: '10px 20px', borderRadius: 3.75 }}>
			<CardHeader
				action={
					<IconButton color="error" onClick={deleteProduct}>
						<DeleteForeverIcon />
					</IconButton>
				}
				sx={{ flexDirection: 'row', p: 0 }}
			></CardHeader>

			<Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
				<CardMedia
					component="img"
					src={image}
					alt={title}
					sx={{
						objectFit: 'contain',
						width: 147,
						marginBottom: 6,
						marginTop: 2,
					}}
				></CardMedia>
				<Box variant="subtitle1">
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="subtitle1" sx={{ color: colors.light }}>
						{sale || price} ₽
					</Typography>
				</Box>
			</Stack>

			<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Stack direction="row" spacing={3}>
					<RemoveCircleIcon
						sx={{
							color: colors.accentSecondary,
							bgcolor: 'white',
							borderRadius: '30px',
							width: 30,
							height: 30,
						}}
						onClick={removeProduct}
					></RemoveCircleIcon>
					<Typography>{count}</Typography>
					<AddCircleIcon
						sx={{
							color: colors.accentSecondary,
							bgcolor: 'white',
							borderRadius: '30px',
							width: 30,
							height: 30,
						}}
						onClick={addProduct}
					></AddCircleIcon>
				</Stack>
				<Typography>{sumProduct} ₽</Typography>
			</CardActions>
		</Card>
	);
};
