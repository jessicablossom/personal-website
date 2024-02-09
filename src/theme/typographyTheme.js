import { createTheme } from '@mui/material/styles';

const fontFamilyPrimary = '"Montserrat", sans-serif';

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
			padding: 25,
			'--gradient-color': 'linear-gradient(to right, rgba(35, 176, 255, 1), rgba(255, 0, 153, 0.1))',
		},
		body1: {
			fontSize: '2rem',
			fontWeight: 400,
			color: '#3d3d3d',
			padding: 25,
		},
	},
});

export default typographyTheme;
