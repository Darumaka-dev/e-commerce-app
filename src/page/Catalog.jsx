import { products } from '../data/products.js';
import { ProductCard } from '../components/ProductCard.jsx';
import { Stack, Container, Typography } from '@mui/material';
import { useAppStyles } from '../data/ThemeStyles';

export const Catalog = (props) => {
	const { cartItems, setCartItems } = props;
	const { colors } = useAppStyles();

	const onAddToCard = (product) => {
		const isProductExists = cartItems.some(({ id }) => product.id == id);

		if (!isProductExists) {
			setCartItems((prev) => [...prev, product]);
			return;
		}

		const updatedCart = cartItems.map(({ id }) =>
			product.id == id ? { ...product, count: product.count + 1 } : product,
		);

		setCartItems(updatedCart);
	};

	return (
		<>
			<Container maxWidth="lg" sx={{ p: '32px 0' }}>
				<Typography variant="h6" sx={{ color: colors.textPrimary }}>
					Наушники
				</Typography>
				<Stack
					direction="row"
					useFlexGap
					spacing={4}
					sx={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						p: '32px 0',
					}}
				>
					{products
						.filter((product) => product.type == 'headPhones')
						.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								onAddToCard={onAddToCard}
							/>
						))}
				</Stack>
				<Typography variant="h6" sx={{ color: colors.textPrimary }}>
					Беспроводные наушники
				</Typography>
				<Stack
					direction="row"
					useFlexGap
					spacing={4}
					sx={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						p: '32px 0',
					}}
				>
					{products
						.filter((product) => product.type == 'earphones')
						.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								onAddToCard={onAddToCard}
							/>
						))}
				</Stack>
			</Container>
		</>
	);
};
