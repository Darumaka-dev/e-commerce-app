import { createTheme, useTheme } from '@mui/material/styles';

export const ThemeStyles = createTheme({
	palette: {
		accentMain: {
			main: '#ffa542',
		},
		accentSecondary: {
			main: '#FFCE7F',
		},
		secondary: {
			main: '#E0C2FF',
		},
		background: {
			main: '#eaeaea',
		},
		text: {
			main: '#838383',
		},
		light: {
			main: '#AAAAAA',
		},
		dark: {
			main: '#000000',
		},
	},
	typography: {
		fontWeightMedium: {
			fontWeight: '600',
		},
	},
});

export const useAppStyles = () => {
	const theme = useTheme();
	return {
		colors: {
			accentMain: theme.palette.accentMain.main,
			accentSecondary: theme.palette.accentSecondary.main,
			bg: theme.palette.background.main,
			textPrimary: theme.palette.text.main,
			dark: theme.palette.dark.main,
			light: theme.palette.light.main,
		},
		fonts: {
			medium: theme.typography.fontWeightMedium.fontWeight,
		},
	};
};
