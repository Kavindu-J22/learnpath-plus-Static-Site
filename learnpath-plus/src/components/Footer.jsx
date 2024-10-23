import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position:  'fixed',
        bottom:  0,
        width: '100%', // Ensures the footer spans the full width of the page
        backgroundColor: 'rgba(2, 56, 75, 0.318)',
        color: 'white',
        padding: '10px 0',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" component="p">
        &copy; {new Date().getFullYear()} LearnPath+
      </Typography>
      <Typography variant="body2" component="p">
        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
          Terms of Service
        </Link>{' | '}
        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
