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
	const {
		product: { title, image, price },
	} = props;

	return (
		<Card sx={{ width: 350 }}>
			<CardMedia
				component="img"
				src={image}
				alt={title}
				sx={{ objectFit: 'contain', height: 200 }}
			/>

			<CardContent>
				<Stack>
					<Stack
						sx={{
							justifyContent: 'space-between',
						}}
						direction="row"
					>
						<Typography variant="body2">{title}</Typography>
						<Typography variant="body2" sx={{ color: 'text.secondary' }}>
							{price}
						</Typography>
					</Stack>
				</Stack>
			</CardContent>

			<CardActions disableSpacing>
				<GradeIcon sx={{ marginRight: 'auto' }}/>
				<Button>Купить</Button>
			</CardActions>
		</Card>
	);
};
