/* eslint-disable react/prop-types */
import { Box, Typography, Grid, Paper, List, ListItem, ListItemIcon } from '@mui/material';
import { CheckCircle, Assignment, People, Assessment } from '@mui/icons-material';

function ObjectivesPage() {
  return (
    <Box sx={{ margin: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <Typography variant="h2" sx={{ color: 'rgb(2, 56, 75)', textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: '600' }}>
        Project Objectives
      </Typography>
      
      <MainObjective 
        title="Enhance Personalization in E-Learning" 
        description="Develop an adaptive learning framework (LearnPath+) that dynamically adjusts to individual learner needs and preferences, using machine learning algorithms for personalized content delivery."
        icon={<Assignment sx={{ color: '#0056b3', fontSize: '2rem' }} />}
      />

      <MainObjective 
        title="Increase User Engagement and Satisfaction"
        description="Utilize UX/UI design and user-centered technology to enhance user satisfaction and promote higher engagement in learning activities."
        icon={<People sx={{ color: '#0073e6', fontSize: '2rem' }} />}
      />

      <MainObjective 
        title="Validate Effectiveness Through Comparative Analysis" 
        description="Evaluate LearnPath+ against traditional e-learning platforms to highlight the benefits of personalized adaptive learning solutions."
        icon={<Assessment sx={{ color: '#FF4081', fontSize: '2rem' }} />}
      />

      <SubObjectives 
        objectives={[
          "Identify and analyze current personalization limitations in e-learning platforms.",
          "Design and implement adaptive algorithms that update based on real-time learner feedback.",
          "Improve content recommendation and learning path customization using machine learning.",
          "Incorporate reinforcement learning for continuous improvement in adaptive recommendations."
        ]}
      />

      <Table title="Objectives Summary" />
    </Box>
  );
}

const MainObjective = ({ title, description, icon }) => (
  <Paper elevation={2} sx={{ marginBottom: '2rem', padding: '1.5rem', borderRadius: '12px' }}>
    <Grid container spacing={2}>
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {icon}
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6" sx={{ color: '#0056b3', fontSize: '1.5rem', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography sx={{ color: '#555', paddingLeft: '0.5rem' }}>{description}</Typography>
      </Grid>
    </Grid>
  </Paper>
);

const SubObjectives = ({ objectives }) => (
  <Paper elevation={2} sx={{ marginBottom: '2rem', padding: '1.5rem', borderRadius: '12px' }}>
    <Typography variant="h6" sx={{ color: '#0073e6', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
      Sub-Objectives
    </Typography>
    <List sx={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#333', display: 'flex', flexDirection: 'column' }}>
      {objectives.map((objective, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <CheckCircle sx={{ color: '#4CAF50' }} />
          </ListItemIcon>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>{objective}</Typography>
        </ListItem>
      ))}
    </List>
  </Paper>
);

const Table = ({ title }) => (
  <Paper elevation={2} sx={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '12px' }}>
    <Typography variant="h6" sx={{ color: '#333', textAlign: 'center', marginBottom: '1rem', fontWeight: '600' }}>
      {title}
    </Typography>
    <Box sx={{ overflowX: 'auto', marginBottom: '30px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objective</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Personalization</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Adaptive framework to meet learner preferences</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>User Engagement</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Enhanced UX/UI to boost learner satisfaction</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Effectiveness Validation</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Comparison with traditional e-learning platforms</td>
          </tr>
        </tbody>
      </table>
    </Box>
  </Paper>
);

export default ObjectivesPage;
