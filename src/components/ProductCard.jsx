import {
	Button,
	Box,
	Stack,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	CardHeader,
	IconButton,
} from '@mui/material';
import { useAppStyles } from '../data/ThemeStyles';

import GradeIcon from '@mui/icons-material/Grade';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ProductCard = (props) => {
	const {
		product: { title, image, price, rating, sale },
		product,
		onAddToCard,
	} = props;

	const { colors } = useAppStyles();

	return (
		<Card sx={{ width: 350, borderRadius: 3.75 }}>
			<CardHeader
				action={
					<IconButton>
						<FavoriteIcon sx={{ color: colors.textPrimary }} />
					</IconButton>
				}
				sx={{ flexDirection: 'row-reverse' }}
			></CardHeader>
			<CardMedia
				component="img"
				src={image}
				alt={title}
				sx={{
					objectFit: 'contain',
					height: 220,
					marginBottom: 6,
					marginTop: 2,
				}}
			/>

			<CardContent>
				<Stack
					direction="row"
					sx={{
						justifyContent: 'space-between',
						height: '45px',
					}}
				>
					<Typography variant="subtitle1">{title}</Typography>
					<Box>
						<Typography sx={{ color: colors.accentMain }}>
							{sale || price} ₽
						</Typography>
						<Typography
							variant="caption"
							sx={{
								textDecoration: 'line-through',
								color: colors.accentSecondary,
							}}
						>
							{sale && `${price} ₽`}
						</Typography>
					</Box>
				</Stack>
			</CardContent>

			<CardActions>
				<Stack
					direction="row"
					sx={{
						alignItems: 'center',
						justifyContent: 'space-between',
						mb: 3.5,
						width: '100%',
					}}
				>
					<Stack
						direction="row"
						spacing={1.25}
						sx={{
							alignItems: 'center',
						}}
					>
						<GradeIcon sx={{ color: colors.accentMain }} />
						<Typography variant="subtitle2" sx={{ color: colors.textPrimary }}>
							{rating}
						</Typography>
					</Stack>
					<Button onClick={() => onAddToCard(product)} color="black">
						Купить
					</Button>
				</Stack>
			</CardActions>
		</Card>
	);
};
