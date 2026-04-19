import { products } from '../data/products.js';
import { ProductCard } from '../components/ProductCard.jsx';
import { Stack, Container, Typography } from '@mui/material';

export const Catalog = (props) => {

	const {cartItems, setCartItems} = props;
	return (
		<>
			<Container maxWidth="lg">
				<Typography variant="h6" sx={{ mb: 2.5, color: '#838383' }}>
					Наушники
				</Typography>
				<Stack
					direction="row"
					useFlexGap
					sx={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						gap: '30px 45px',
						mb: 3.75,
					}}
				>
					{products
						.filter((product) => product.type == 'headPhones')
						.map((product) => (
							<ProductCard key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems}/>
						))}
				</Stack>
				<Typography variant="h6" sx={{ mb: 2.5, color: '#838383' }}>
					Беспроводные наушники
				</Typography>
				<Stack
					direction="row"
					useFlexGap
					sx={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						gap: '30px 45px',
						mb: 3.75,
					}}
				>
					{products
						.filter((product) => product.type == 'earphones')
						.map((product) => (
							<ProductCard key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems}/>
						))}
				</Stack>
			</Container>
		</>
	);
};
