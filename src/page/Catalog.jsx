import { products } from '../data/products.js';
import { ProductCard } from '../components/ProductCard.jsx';
import { Stack, Container, Typography } from '@mui/material';
import { useAppStyles } from '../data/ThemeStyles';

export const Catalog = (props) => {
	const { cartItems, setCartItems } = props;
	const { colors } = useAppStyles();
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
								cartItems={cartItems}
								setCartItems={setCartItems}
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
								cartItems={cartItems}
								setCartItems={setCartItems}
							/>
						))}
				</Stack>
			</Container>
		</>
	);
};
