import { CartCard } from '../components/CartCard.jsx';
import { useAppStyles } from '../data/ThemeStyles';

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
	const { colors } = useAppStyles();

	const deleteProduct = (id) => {
		setCartItems(cartItems.filter((product) => product.id !== id));
	};

	const addProduct = (product) => {
		setCartItems((prev) => {
			return prev.map((prod) =>
				product.id == prod.id ? { ...prod, count: prod.count + 1 } : prod,
			);
		});
	};

	const removeProduct = (product) => {
		if (product.count == 1) {
			setCartItems(cartItems.filter((p) => p.id !== product.id));
			return;
		}

		setCartItems((prev) => {
			return prev.map((prod) =>
				product.id == prod.id ? { ...prod, count: prod.count - 1 } : prod,
			);
		});
	};

	const totalPrice = cartItems.reduce(
		(acc, currentValue) =>
			acc + (currentValue.sale || currentValue.price) * currentValue.count,
		0,
	);

	return (
		<Container maxWidth="lg" sx={{ minHeight: '100vh', p: '32px 0' }}>
			<Typography variant="h6" sx={{ color: colors.textPrimary }}>
				Корзина
			</Typography>

			<Stack
				direction="row"
				useFlexGap
				spacing={3}
				sx={{
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					p: '30px 0',
				}}
			>
				<Stack
					direction="column"
					spacing={4}
					sx={{ minWidth: 330, flexGrow: 2 }}
				>
					{cartItems.map((product) => (
						<CartCard
							key={product.id}
							product={product}
							onDelete={deleteProduct}
							onAdd={addProduct}
							onRemove={removeProduct}
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
							variant="contained"
							fullWidth
							sx={{
								bgcolor: colors.dark,
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
