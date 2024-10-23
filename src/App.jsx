// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Abstract from './pages/Abstract';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import Conclusion from './pages/Conclusion';
import AboutUs from './pages/AboutUs'; // Ensure the correct spelling
import Footer from './components/Footer';
import Loading from './components/Loading'; // Import the Loading component
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change 3000 to the desired loading time in milliseconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Show Loading component when loading
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Router>
          <Navbar />
          <Box sx={{ flexGrow: 1 , pt: 8}}>
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
                <Route path="/aboutus" element={<AboutUs />} />
              </Routes>
            </Container>
          </Box>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
