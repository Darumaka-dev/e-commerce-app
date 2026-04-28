import { CartCard } from '../components/CartCard.jsx';

import {
	Container,
	Button,
	Stack,
	Typography,
	Card,
	CardContent,
	CardActions,
} from '@mui/material';

export const Cart = (props) => {
	const { cartItems, setCartItems } = props;

	const countCartItems = () => {
		return cartItems.reduce((acc, currentValue) => {
			const existingProduct = acc.find((item) => item.id == currentValue.id);

			existingProduct
				? existingProduct.count++
				: acc.push({ ...currentValue, count: 1 });
			return acc;
		}, []);
	};

	const totalPrice = cartItems.reduce(
		(acc, currentValue) =>
			acc + (currentValue.sale ? currentValue.sale : currentValue.price),
		0,
	);

	const cardProducts = countCartItems();

	return (
		<Container maxWidth="lg" sx={{ minHeight: '100vh', mb: 10 }}>
			<Typography variant="h6" sx={{ mb: 2.5, color: '#838383' }}>
				Корзина
			</Typography>

			<Stack
				direction="row"
				sx={{
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					gap: 3,
				}}
			>
				<Stack
					direction="column"
					spacing={'30px'}
					sx={{  minWidth: 330, flexGrow: 2 }}
				>
					{cardProducts.map((product) => (
						<CartCard
							key={product.id}
							product={product}
							cartItems={cartItems}
							setCartItems={setCartItems}
						/>
					))}
				</Stack>

				<Card
					sx={{ minWidth: 330, flexGrow: 1, borderRadius: 2.5, height: '100%' }}
				>
					<CardContent>
						<Stack
							direction="row"
							sx={{ justifyContent: 'space-between', p: '20px' }}
						>
							<Typography variant="subtitle1">ИТОГО</Typography>
							<Typography variant="subtitle1">₽ {totalPrice}</Typography>
						</Stack>
					</CardContent>
					<CardActions sx={{ p: 0 }}>
						<Button
							variant="contained" fullWidth
							sx={{
								bgcolor: 'black',
								borderRadius: 2.5,
								p: '12px 18px',
							}}
						>
							Перейти к оформлению
						</Button>
					</CardActions>
				</Card>
			</Stack>
		</Container>
	);
};
