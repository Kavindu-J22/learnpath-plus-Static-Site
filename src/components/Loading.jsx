import { CircularProgress, Box, Typography } from '@mui/material';
import Logo from "../assets/logo.png";

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <img 
        src={Logo}
        alt="Logo"
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <CircularProgress
        sx={{
          color: '#dc004e',
          animation: 'rotate 1s linear infinite',
        }}
      />
      <Typography variant="h6" sx={{ mt: 2, animation: 'fadeIn 1s infinite alternate' }}>
        Loading...
      </Typography>
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default Loading;
