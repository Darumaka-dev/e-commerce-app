import {
	Box,
	CardHeader,
	Stack,
	Typography,
	Card,
	CardMedia,
	CardActions,
	IconButton,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useAppStyles } from '../data/ThemeStyles';

export const CartCard = (props) => {
	const {
		product: { id, title, image, price, sale, count },
		product,
		onDelete,
		onAdd,
		onRemove,
	} = props;

	const { colors } = useAppStyles();

	const sumProduct = (sale || price) * count;

	return (
		<Card sx={{ maxWidth: 633, p: '10px 20px', borderRadius: 3.75 }}>
			<CardHeader
				action={
					<IconButton color="error" onClick={() => onDelete(id)}>
						<DeleteForeverIcon />
					</IconButton>
				}
				sx={{ flexDirection: 'row', p: 0 }}
			></CardHeader>

			<Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
				<CardMedia
					component="img"
					src={image}
					alt={title}
					sx={{
						objectFit: 'contain',
						width: 147,
						marginBottom: 6,
						marginTop: 2,
					}}
				></CardMedia>
				<Box variant="subtitle1">
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="subtitle1" sx={{ color: colors.light }}>
						{sale || price} ₽
					</Typography>
				</Box>
			</Stack>

			<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Stack direction="row" spacing={3}>
					<RemoveCircleIcon
						sx={{
							color: colors.accentSecondary,
							bgcolor: 'white',
							borderRadius: '30px',
							width: 30,
							height: 30,
						}}
						onClick={() => onRemove(product)}
					/>
					<Typography>{count}</Typography>
					<AddCircleIcon
						sx={{
							color: colors.accentSecondary,
							bgcolor: 'white',
							borderRadius: '30px',
							width: 30,
							height: 30,
						}}
						onClick={() => onAdd(product)}
					></AddCircleIcon>
				</Stack>
				<Typography>{sumProduct} ₽</Typography>
			</CardActions>
		</Card>
	);
};
