import { react } from 'react';
import { HomePage } from './Components/Homepage/HomePage';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';

export const theme = createTheme({
	typography: {
		fontFamily: "'ShareTech', 'Arial', sans-serif",
		fontSize: 22,
		button: {
			textTransform: 'none',
		},
	},
	palette: {
		primary: {
			main: '#ffffff',
			dark: '#E8E8E8',
		},
		secondary: {
			main: '#222831',
		},
		darkTones: {
			main: '#30475E',
			dark: '#222831',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
