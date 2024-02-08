import { createTheme } from '@mui/material/styles';

const fontFamilyPrimary = '"Montserrat", sans-serif';
const fontFamilySecondary = '"Roboto", sans-serif';

const typographyTheme = createTheme({
	typography: {
		fontFamily: fontFamilyPrimary,
		title: {
			fontSize: '8rem',
			fontWeight: 300,
			color: '#3D3D3D',
		},
		subtitle1: {
			fontSize: '5rem',
			fontWeight: 600,
			color: '#8a8a8a',
		},
	},
});

export default typographyTheme;
