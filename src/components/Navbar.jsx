// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, Box, Divider, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import logo from '../../public/assets/logo.png'; 


const Navbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
 

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const buttonStyle = (path) => ({
    color: location.pathname === path ? '#FFD700' : 'inherit', // Custom active tab color
    fontWeight: location.pathname === path ? 'bold' : 'normal', // Highlight active tab
  });

  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'objectives', path: '/objectives', icon: <AssignmentTurnedInIcon /> },
    { text: 'Abstract', path: '/abstract', icon: <DescriptionIcon /> },
    { text: 'Literature Review', path: '/litaratureReview', icon: <MenuBookIcon /> },
    { text: 'Methodology', path: '/methodology', icon: <EmojiObjectsIcon /> },
    { text: ' System Architecture', path: '/systemArchitecture', icon: <ArchitectureIcon /> },
    { text: 'Results', path: '/results', icon: <BarChartIcon /> },
    { text: 'Conclusion', path: '/conclusion', icon: <CheckCircleIcon /> },
    { text: 'Documentations', path: '/documentations', icon: <InfoIcon /> },
    { text: 'About Us', path: '/aboutus', icon: <InfoIcon /> }
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(2, 56, 75)' }}>
        <Container maxWidth="lg">
          <Toolbar>
            {/* Logo */}
            <a href='/' style={{ marginRight: '10px' }}>
            <img 
              src={logo} 
              alt="LearnPath+ Logo" 
              style={{ width: '40px', height: '40px' }}
            />
            </a>
            <a href='/' style={{color:'#fff', textDecoration: 'none', flexGrow: 1}}>
            <Typography variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif' }}>
              LearnPath+
            </Typography>
            </a>
            {/* Menu items */}
            {isMobile ? (
              <>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                {/* Drawer for mobile menu */}
                <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                  {/* Close Button inside Drawer */}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2, backgroundColor: 'rgb(2, 56, 75)' }}>
                    <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Divider />
                  <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: 'rgb(2, 56, 75)', height: '100%' }}>
                    {menuItems.map((item) => (
                      <ListItem 
                        button 
                        key={item.text} 
                        component={Link} 
                        to={item.path}
                        onClick={handleDrawerToggle} // Close drawer after clicking
                        sx={{ 
                          width: '100%', 
                          textAlign: 'center', 
                          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, 
                          color: location.pathname === item.path ? '#FFD700' : 'white' // Active tab color in mobile
                        }} // Center the text in each column
                      >
                        <ListItemIcon sx={{ color: location.pathname === item.path ? '#FFD700' : 'white' }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                          primary={item.text} 
                          primaryTypographyProps={{
                            style: {
                              fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                              fontSize: '18px', // Increase font size for better mobile view
                            }
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              <>
                {menuItems.map((item) => (
                  <Button 
                    key={item.text} 
                    component={Link} 
                    to={item.path} 
                    sx={buttonStyle(item.path)}
                  >
                    {item.text}
                  </Button>
                ))}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
