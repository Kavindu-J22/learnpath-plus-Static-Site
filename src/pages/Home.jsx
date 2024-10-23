import Section from '../components/Section';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Star } from '@mui/icons-material'; 
import Bgimg from "../assets/bgimg1.png";

const Home = () => {
  return (
    <Box 
      sx={{ 
        fontFamily: 'Poppins, sans-serif', 
        backgroundColor: '#f4f4f9', 
        color: '#333', 
        padding: { xs: '20px', sm: '40px' } 
      }}
    >
      {/* Hero Section with Image */}
      <Box
        sx={{
          textAlign: 'center',
          padding: { xs: '40px 20px', sm: '60px 40px' },
          background: 'linear-gradient(135deg, #4A90E2 0%, #50C878 100%)',
          borderRadius: '12px',
          marginBottom: '40px',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
        }}
      >
        <img 
          src="../assets/logo.png" 
          alt="LearnPath+ Logo" 
          style={{ 
            width: '180px', 
            marginBottom: '15px', 
            animation: 'logoBounce 2s infinite' // Add animation here
          }} 
        />
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '4rem' }, color: '#fff', fontWeight: 'bold' }}>
          🚀 Welcome to LearnPath+!
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', maxWidth: '900px', margin: '0 auto', fontSize: { xs: '1.1rem', sm: '1.5rem' }, lineHeight: '1.6' }}>
          Discover our innovative adaptive learning platform, designed to revolutionize education using AI and machine learning. LearnPath+ provides a personalized journey for every learner to enhance retention and engagement. 📚💡
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Section 
        title="Introduction to LearnPath+"
        content={
          <>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.8', padding: { xs: '0 10px', sm: '0 20px' } }}>
              In today&apos;s digital age, traditional e-learning platforms often lack personalized content, leading to decreased engagement and lower knowledge retention. LearnPath+ bridges this gap by offering personalized learning paths that adapt to each student’s behavior and performance in real-time. 🧠✨
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.8', padding: { xs: '0 10px', sm: '0 20px' }, marginTop: '10px' }}>
              Powered by AI, our platform addresses the challenges faced by traditional e-learning systems through dynamic and interactive learning paths. By analyzing learner data, LearnPath+ can recommend tailored content and offer continuous feedback. 🎓
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
              <img src={Bgimg} alt="Personalized Learning" style={{ width: '50%', borderRadius: '12px' }} />
            </Box>
          </>
        }
      />

      {/* Features Section with Cards */}
      <Section 
        title="Why Choose LearnPath+?"
        content={
          <Grid container spacing={4}>
            {[
              { 
                title: 'Adaptive Learning Paths', 
                description: 'Tailored learning experiences driven by AI and machine learning. Learners receive customized courses and real-time feedback. 🤖', 
                icon: 'https://cdn-icons-png.flaticon.com/512/3159/3159063.png'
              },
              { 
                title: 'Increased Engagement', 
                description: 'Interactive tools, including gamification and quizzes, keep learners engaged and motivated to learn. 🔥', 
                icon: 'https://cdn-icons-png.flaticon.com/512/4305/4305388.png' 
              },
              { 
                title: 'Boosted Knowledge Retention', 
                description: 'Personalized learning paths help students retain up to 28% more information. 💡', 
                icon: 'https://cdn-icons-png.flaticon.com/512/2049/2049404.png' 
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ 
                  boxShadow: 3, 
                  textAlign: 'center', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  padding: '20px', 
                  height: '300px', // Set a fixed height
                  transition: 'transform 0.3s', 
                  '&:hover': { transform: 'scale(1.05)' }
                }}>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={feature.icon} alt={`${feature.title} Icon`} style={{ width: '60px', marginBottom: '15px' }} />
                    <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{feature.title}</Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px', fontSize: '0.95rem', textAlign: 'center' }}>{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        }
      />


      {/* Success Stories Section */}
      <Section 
        title="Success Stories"
        content={
          <Grid container spacing={4}>
            {[
              { 
                name: 'Dhanuka Balasooriya', 
                story: 'LearnPath+ completely changed how I approach my studies. The personalized learning paths keep me motivated, and I’ve seen a 30% improvement in my test scores!',
                icon: <Star sx={{ color: '#FFD700', fontSize: '40px', marginRight: '10px' }} /> // Gold star icon
              },
              { 
                name: 'Kishan Rajendran', 
                story: 'Thanks to LearnPath+, I now enjoy learning more than ever. The AI-powered recommendations make learning so much easier and enjoyable.',
                icon: <Star sx={{ color: '#FFD700', fontSize: '40px', marginRight: '10px' }} /> // Gold star icon
              },
            ].map((successStory, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ boxShadow: 3, borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '20px', height: '100px',}}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {successStory.icon}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}><strong>{successStory.name}</strong></Typography>
                      <Typography variant="body2" sx={{ marginTop: '10px' }}>&quot;{successStory.story}&quot;</Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        }
      />

      {/* Call to Action Section */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          padding: { xs: '40px 20px', sm: '60px 40px' }, 
          background: '#ffffff', 
          borderRadius: '12px', 
          boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', 
          marginTop: '40px', 
          marginBottom: '60px' 
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#4A90E2', 
            marginBottom: '20px', 
            fontSize: { xs: '2rem', sm: '3rem' }, 
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Updated font family
            fontWeight: 'bold' // Added font weight for emphasis
          }}
        >
          📚 Ready to experience the future of learning?
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { xs: '1rem', sm: '1.25rem' }, // Slightly increased size for larger screens
            marginBottom: '30px', 
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Updated font family
            lineHeight: 1.6 // Improved line height for readability
          }}
        >
          Join thousands of students who have already discovered the power of personalized learning with LearnPath+. Start your journey today!
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" // Changed to secondary color for contrast
          href="https://edu-quest.vercel.app/" 
          sx={{ 
            padding: '15px 30px', 
            fontSize: '1.25rem', // Increased font size
            backgroundColor: '#FF4081', // Changed button color to a vibrant pink
            '&:hover': { 
              backgroundColor: '#D5006D' // Darker pink for hover effect
            },
            borderRadius: '8px', // Added border radius for softer edges
            boxShadow: '0px 2px 8px rgba(0,0,0,0.15)', // Added shadow for depth
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease' // Smooth transition
          }}
        >
          Get Started Now 🚀
        </Button>
      </Box>


      {/* Add Keyframes for Logo Animation */}
      <style jsx>{`
        @keyframes logoBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </Box>
  );
};

export default Home;
