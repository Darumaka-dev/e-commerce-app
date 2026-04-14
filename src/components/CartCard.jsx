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
	IconButton,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';

export const CartCard = (props) => {
	const {
		product: { id, title, image, price, rating, sale },
		product,
		cart,
		setCart,
	} = props;

	const deleteProduct = () => {
		setCart(cart.filter((product) => product.id !== id));
	};

	const addProduct = () => {
		setCart((prev) => [...prev, product]);
	};

	const removeProduct = () => {
		const productIndexToBeRemoved = cart.findLastIndex(
			(itemProduct) => itemProduct.id == id,
		);
		setCart(cart.toSpliced(productIndexToBeRemoved, 1));
	};

	const sumProduct = (sale? sale : price) * product.count;

	console.log(sumProduct)

	return (
		<Card sx={{ maxWidth: 633, p: '10px 20px', borderRadius: 3.75 }}>
			<IconButton
				color="error"
				sx={{ display: 'block', ml: 'auto' }}
				onClick={deleteProduct}
			>
				<DeleteForeverIcon />
			</IconButton>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
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
					<Typography variant="subtitle1" sx={{ color: '#AAAAAA' }}>
						{sale ? sale : price} ₽
					</Typography>
				</Box>
			</Box>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box sx={{ display: 'flex', gap: '25px', pl: 2 }}>
					<RemoveCircleIcon
						sx={{
							color: '#FFCE7F',
							bgcolor: 'white',
							borderRadius: '30px',
							width: 30,
							height: 30,
						}}
						onClick={removeProduct}
					></RemoveCircleIcon>
					<Typography>{product.count}</Typography>
					<AddCircleIcon
						sx={{
							color: '#FFCE7F',
							bgcolor: 'white',
							borderRadius: '30px',
							width: 30,
							height: 30,
						}}
						onClick={addProduct}
					></AddCircleIcon>
				</Box>
				<Typography>{sumProduct} ₽</Typography>
			</CardActions>
		</Card>
	);
};
