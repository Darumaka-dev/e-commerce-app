import {
	Container,
	Button,
	Box,
	Stack,
	Typography,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
} from '@mui/material';

import GradeIcon from '@mui/icons-material/Grade';

export const ProductCard = (props) => {
	console.log(props.product.title);
	return (
		<Stack
			// spacing={2}
			direction="row"
			useFlexGap
			sx={{ flexWrap: 'wrap' }}
		>
			<Card sx={{ width: 350 }}>
				<CardContent>
					<Stack>
						<img
							sx={{ mx: 0, my: 'auto' }}
							src={props.product.image}
							alt={props.product.title}
						/>
						<Stack
							sx={{
								alignItems: 'center',
								justifyContent: 'space-between',
								px: 2,
								mb: 2,
								flex: 1,
							}}
							direction="row"
						>
							<CardHeader title={props.product.title} sx={{ p: 0 }} />
							<Typography variant="body2" sx={{ color: 'text.secondary' }}>
								{props.product.price}
							</Typography>
						</Stack>
						<Stack
							sx={{
								alignItems: 'center',
								justifyContent: 'space-between',
								px: 2,
								mb: 2,
							}}
							direction="row"
						>
							<GradeIcon></GradeIcon>
							<CardActions>Купить</CardActions>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};
