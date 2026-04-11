import { products } from '../data/products.js';
import { ProductCard } from '../components/ProductCard.jsx';
import { Stack, Container, Typography } from '@mui/material';

export const Catalog = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Typography sx={{ mb: 2.5 }}>Наушники</Typography>
				<Stack
					spacing={2}
					direction="row"
					useFlexGap
					sx={{ flexWrap: 'wrap', mb: 3.75, justifyContent: 'center' }}
				>
					{products
						.filter((product) => product.type == 'headPhones')
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</Stack>
				<Typography sx={{ mb: 2.5 }}>Беспроводные наушники</Typography>
				<Stack
					spacing={2}
					direction="row"
					useFlexGap
					sx={{ flexWrap: 'wrap', mb: 3.75, justifyContent: 'center' }}
				>
					{products
						.filter((product) => product.type == 'earphones')
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</Stack>
			</Container>
		</>
	);
};
