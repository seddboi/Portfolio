import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactPage } from './Pages/ContactPage';
import { Projects } from './Pages/Projects';
import { HomePage } from './Pages/Homepage/HomePage';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';

export const theme = createTheme({
  typography: {
    'fontFamily': "'Modeseven', 'Arial', sans-serif",
    'fontSize': 22,
    button: {
      textTransform: 'none'
    }
  }, palette: {
    primary: {
      main: '#ffffff',
      dark: 'E8E8E8'
    },
    secondary: {
      main: '#F05454'
    }, 
    darkTones: {
      main: '#30475E',
      dark: '#222831'
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path='/contact' element={<ContactPage />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='*'></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
