import { CartCard } from '../components/CartCard.jsx';

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

export const Cart = (props) => {
	const { cart, setCart } = props;

	const renderCartProduct = () => {
		return cart.reduce((acc, currentValue) => {
			const existingProduct = acc.find((item) => item.id == currentValue.id);

			existingProduct
				? existingProduct.count++
				: acc.push({ ...currentValue, count: 1 });
			console;
			return acc;
		}, []);
	};

	const totalPrice = cart.reduce((acc, currentValue) => acc + (currentValue.sale ? currentValue.sale : currentValue.price), 0);

	console.log(totalPrice)

	const cartProduct = renderCartProduct();
	console.log(cartProduct);

	return (
		<Container maxWidth="lg" sx={{ minHeight: '100vh', mb: 10 }}>
			<Typography variant="h6" sx={{ mb: 2.5, color: '#838383' }}>
				Корзина
			</Typography>

			<Stack sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap:'wrap', gap: 3}}>
				<Stack sx={{ display: 'flex', gap: '30px', minWidth: 330, flexGrow: 2,}}>
					{cartProduct.map((product) => (
						<CartCard
							sx={{ p: 0 }}
							key={1}
							product={product}
							cart={cart}
							setCart={setCart}
						/>
					))}
				</Stack>

				<Card sx={{  minWidth: 330, flexGrow: 1, borderRadius: 2.5, height: '100%'}}>
					<CardContent sx={{display: 'flex', gap: '30px',justifyContent: 'space-between', p:0}}>
						<Typography sx={{m:'20px', fontWeight: 500}}>ИТОГО</Typography>
						<Typography sx={{m:'20px', fontWeight: 500}}>₽ {totalPrice}</Typography>
					</CardContent>
					<CardActions sx={{p:0}}>
						<Button variant="contained" sx={{width:'100%', bgcolor:'black', borderRadius: 2.5, m: 0, p:'12px 18px'}}>Перейти к оформлению</Button>
					</CardActions>
				</Card>
			</Stack>
		</Container>
	);
};
