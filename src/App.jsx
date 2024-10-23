import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Abstract from './pages/Abstract';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import Conclusion from './pages/Conclusion';
import AbuotUs from './pages/AboutUs';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#dc004e', // Pink
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Full height of the viewport
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Router>
          <Navbar />
          <Box sx={{ flexGrow: 1 }}> {/* This box will push the footer down */}
            <Container 
              maxWidth="lg" 
              sx={{ 
                mt: 4, 
                mb: 4, 
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/abstract" element={<Abstract />} />
                <Route path="/methodology" element={<Methodology />} />
                <Route path="/results" element={<Results />} />
                <Route path="/conclusion" element={<Conclusion />} />
                <Route path="/aboutus" element={<AbuotUs />} />
              </Routes>
            </Container>
          </Box>
          <Footer /> {/* Footer will stay at the bottom */}
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
