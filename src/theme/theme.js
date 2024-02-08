import { createTheme } from '@mui/material/styles';
import typographyTheme from './typographyTheme';

const theme = createTheme({
	typography: typographyTheme.typography,
});

export default theme;
