/* eslint-disable react/no-unknown-property */
import Section from '../components/Section';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Star, Science, HelpOutline } from '@mui/icons-material'; 
import Bgimg from "../assets/bgimg1.png";
import Logo from "../assets/logo.png";

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
      {/* Hero Section */}
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
          src={Logo}
          alt="LearnPath+ Logo" 
          style={{ 
            width: '180px', 
            marginBottom: '15px', 
            animation: 'logoBounce 2s infinite'
          }} 
        />
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '4rem' }, color: '#fff', fontWeight: 'bold' }}>
          🚀 Welcome to LearnPath+!
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', maxWidth: '900px', margin: '0 auto', fontSize: { xs: '1.1rem', sm: '1.5rem' }, lineHeight: '1.6' }}>
          Discover our adaptive learning platform that combines AI with tailored education pathways. LearnPath+ adapts in real-time to provide every learner with a personalized experience.
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Section 
        title="Introduction to LearnPath+"
        content={
          <>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.8', padding: '10px' }}>
              In today’s digital age, traditional e-learning platforms often lack personalized content, leading to decreased engagement and lower knowledge retention. LearnPath+ bridges this gap by offering personalized learning paths that adapt to each student’s behavior and performance in real-time.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.8', padding: '10px', marginTop: '10px' }}>
              Powered by AI, our platform addresses the challenges faced by traditional e-learning systems through dynamic and interactive learning paths. By analyzing learner data, LearnPath+ can recommend tailored content and offer continuous feedback.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
              <img src={Bgimg} alt="Personalized Learning" style={{ width: '40%', borderRadius: '12px' }} />
            </Box>
          </>
        }
      />

      {/* Research Gap */}
      <Section 
        title={
          <Box display="flex" alignItems="center">
            <Science sx={{ color: '#4A90E2', fontSize: '2.5rem', marginRight: '10px' }} />
            Research Gap
          </Box>
        }
        content={
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.8', padding: '10px' }}>
            Traditional e-learning platforms struggle with static content delivery, which limits engagement and does not cater to diverse learning needs. The LearnPath+ platform aims to bridge this gap by creating adaptive, learner-centric pathways that respond to each student&apos;s progress, preferences, and performance in real time.
          </Typography>
        }
      />

      {/* Research Problem */}
      <Section 
        title={
          <Box display="flex" alignItems="center">
            <HelpOutline sx={{ color: '#FF4081', fontSize: '2.5rem', marginRight: '10px' }} />
            Research Problem
          </Box>
        }
        content={
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.8', padding: '10px' }}>
            The current e-learning systems rely on a one-size-fits-all model that does not adapt to the learner&lsquo;s individual needs. This static approach can result in disengagement, reduced knowledge retention, and lower satisfaction levels. Our solution, LearnPath+, utilizes adaptive learning technologies to create dynamic, personalized learning journeys that increase engagement and retention.
          </Typography>
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
                description: 'Tailored learning experiences driven by AI and machine learning. Learners receive customized courses and real-time feedback.', 
                icon: 'https://cdn-icons-png.flaticon.com/512/3159/3159063.png'
              },
              { 
                title: 'Increased Engagement', 
                description: 'Interactive tools, including gamification and quizzes, keep learners engaged and motivated to learn.', 
                icon: 'https://cdn-icons-png.flaticon.com/512/4305/4305388.png' 
              },
              { 
                title: 'Boosted Knowledge Retention', 
                description: 'Personalized learning paths help students retain up to 28% more information.', 
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
                  height: '300px',
                  marginBottom: '20px',
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

      {/* Technologies We Use */}
      <Section
        title="Technologies We Use"
        content={
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', marginTop: '40px', marginBottom: '40px' }}>
            {['React', 'Python', 'Flask API', 'MongoDB', 'Azure', 'Figma'].map((tech, index) => (
              <Button key={index} variant="outlined" sx={{ borderRadius: '20px', fontSize: '1rem' }}>
                {tech}
              </Button>
            ))}
          </Box>
        }
      />

      {/* Research Components */}
      <Section 
        title="Main Components of Our Research"
        content={
          <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
            {[
              { title: 'Student Learning Profiling Module', author: 'Nishshanka N.A.P.K.R', description: 'Creates detailed user profiles to tailor learning paths based on individual performance and preferences.' },
              { title: 'Adaptive Recommendation Engine', author: 'Abeykoon R.M.S.P', description: 'Provides real-time, AI-driven recommendations for learning materials to maximize learner outcomes.' },
              { title: 'Dynamic Learning Pathway Generator', author: 'Jayasinghe K.A.K.N', description: 'Designs personalized, adaptive learning pathways that adjust based on learner engagement and feedback.' },
              { title: 'Comprehensive User Interaction & Feedback Loop', author: 'Nishshanka N.A.G.A.A', description: 'Optimizes the learning experience based on continuous user feedback and system performance metrics.' },
            ].map((component, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ boxShadow: 3, borderRadius: '12px', padding: '20px'}}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{component.title}</Typography>
                    <Typography variant="subtitle2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                      Led by {component.author}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px' }}>
                      {component.description}
                    </Typography>
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
              { name: 'Dhanuka Balasooriya', story: 'LearnPath+ completely changed how I approach my studies. The personalized learning paths keep me motivated, and I’ve seen a 30% improvement in my test scores!', icon: <Star sx={{ color: '#FFD700', fontSize: '40px', marginRight: '10px' }} /> },
              { name: 'Kishan Rajendran', story: 'Thanks to LearnPath+, I now enjoy learning more than ever. The AI-powered recommendations make learning so much easier and enjoyable.', icon: <Star sx={{ color: '#FFD700', fontSize: '40px', marginRight: '10px' }} /> },
            ].map((successStory, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ boxShadow: 3, borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '20px', marginBottom: '40px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {successStory.icon}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{successStory.name}</Typography>
                      <Typography variant="body2" sx={{ marginTop: '10px' }}>&quot;{successStory.story}&quot;</Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        }
      />

      {/* Contact Us Section */}
      <Section 
        title="Contact Us"
        content={
          <Grid container spacing={2}>
            {[
              { name: 'Nishshanka N.A.P.K.R', id: 'IT21033032', mobile: '+94 71 291 5150', Email: 'it21033032@my.sliit.lk' },
              { name: 'Abeykoon R.M.S.P', id: 'IT21021602', mobile: '+94 75 912 4951', Email: 'it21021602@my.sliit.lk' },
              { name: 'Jayasinghe K.A.K.N', id: 'IT21032806', mobile: '+94 76 527 8729', Email: 'it21032806@my.sliit.lk' },
              { name: 'Nishshanka N.A.G.A.A', id: 'IT21032974', mobile: '+94 71 689 7401', Email: 'it21032974@my.sliit.lk' }
            ].map((contact, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ padding: '20px', borderRadius: '12px' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{contact.name}</Typography>
                    <Typography variant="body2">ID: {contact.id}</Typography>
                    <Typography variant="body2">Contact: {contact.mobile}</Typography>
                    <Typography variant="body2">E-mail: {contact.Email}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        }
      />

      {/* Call to Action */}
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
            color: 'rgb(23, 92, 117)', 
            marginBottom: '20px', 
            fontSize: { xs: '2rem', sm: '3rem' }, 
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 'bold'
          }}
        >
          📚 Ready to experience the future of learning?
        </Typography>
        <Button 
          variant="contained" 
          href="https://edu-quest.vercel.app/" 
          sx={{ 
            padding: '15px 30px', 
            fontSize: '1.25rem',
            backgroundColor: '#FF4081',
            '&:hover': { backgroundColor: '#D5006D' },
            borderRadius: '8px', 
            boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          Get Started Now 🚀
        </Button>
      </Box>

      {/* Logo Bounce Animation */}
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
