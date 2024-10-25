/* eslint-disable react/prop-types */
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { FaUser, FaCogs, FaChartLine, FaRegComments } from 'react-icons/fa';
import SD from '../assets/SD.png';
import Cmp1 from '../assets/cmp1.png';
import Cmp2 from '../assets/cmp2.png';
import Cmp3 from '../assets/cmp3.png';
import Cmp4 from '../assets/cmp4.png';

function SystemArchitecturePage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <ArchitectureIcon style={styles.icon} />
        System Architecture
      </h2>

      <p style={styles.intro}>
        The LearnPath+ platform is designed to provide an adaptive learning experience with a modular system architecture. 
        This includes the Student Profiling Module, Adaptive Recommendation Engine, Dynamic Learning Pathway Generator, 
        and Comprehensive User Interaction and Feedback Loop. Each component is designed to enhance personalization and 
        engagement within the e-learning environment.
      </p>

      <h3 style={styles.subHeader}>System Overview</h3>
      <p style={styles.paragraph}>
        The system architecture integrates multiple modules to create a robust adaptive learning framework. The primary components work 
        together to track learner behavior, predict outcomes, recommend learning materials, and optimize learning pathways dynamically. 
        The architecture diagram below provides an overview of the LearnPath+ framework.
      </p>
      <ImageSection src={SD} title="Full System Architecture Diagram" />

      <h3 style={styles.subHeader}>Component Diagrams</h3>

      <ComponentSection 
        title="Student Learning Profiling Module"
        description="This module builds detailed user profiles based on learning preferences, previous performance, and other behavioral data, creating a foundation for personalized learning paths."
        imgSrc={Cmp1}
        icon={<FaUser style={styles.componentIcon} />}
        mainObjective="Develop a comprehensive learner profile for personalized learning."
        subObjectives={[
          "Analyze learner preferences and past performance data.",
          "Update learner profiles dynamically based on real-time interactions.",
          "Provide tailored content recommendations."
        ]}
      />

      <ComponentSection 
        title="Adaptive Recommendation Engine"
        description="Using machine learning, this engine recommends resources, predicts outcomes, and customizes study plans based on the learner's profile and engagement metrics."
        imgSrc={Cmp2}
        icon={<FaCogs style={styles.componentIcon} />}
        mainObjective="Generate adaptive recommendations to improve learning outcomes."
        subObjectives={[
          "Predict learner performance based on profile data.",
          "Provide resource recommendations to match learner needs.",
          "Update recommendations based on continuous feedback."
        ]}
      />

      <ComponentSection 
        title="Dynamic Learning Pathway Generator"
        description="This component generates and optimizes individualized learning pathways based on real-time user data and feedback, enhancing user engagement and learning outcomes."
        imgSrc={Cmp3}
        icon={<FaChartLine style={styles.componentIcon} />}
        mainObjective="Create personalized learning pathways for improved engagement."
        subObjectives={[
          "Adapt pathways based on learner feedback and performance data.",
          "Offer varied content based on individual learning styles.",
          "Continuously refine pathways to enhance knowledge retention."
        ]}
      />

      <ComponentSection 
        title="Comprehensive User Interaction and Feedback Loop"
        description="Collects and analyzes user feedback to continuously refine recommendations and optimize the system based on performance metrics and user satisfaction data."
        imgSrc={Cmp4}
        icon={<FaRegComments style={styles.componentIcon} />}
        mainObjective="Optimize learning pathways and recommendations through user feedback."
        subObjectives={[
          "Analyze feedback to identify areas of improvement.",
          "Adjust content and recommendations based on user satisfaction metrics.",
          "Continuously monitor and improve system performance."
        ]}
      />
    </div>
  );
}

const ImageSection = ({ src, title }) => (
  <div style={styles.imageContainer}>
    <img src={src} alt={title} style={styles.image} />
    <p style={styles.imageCaption}>{title}</p>
  </div>
);

const ComponentSection = ({ title, description, imgSrc, icon, mainObjective, subObjectives }) => (
  <div style={styles.card}>
    <h4 style={styles.cardHeader}>
      {icon}
      {title}
    </h4>
    <p style={styles.cardDescription}>{description}</p>
    <ImageSection src={imgSrc} title={`${title} Diagram`} />
    
    <h5 style={styles.objectiveHeader}>Main Objective</h5>
    <p style={styles.cardText}>{mainObjective}</p>

    <h5 style={styles.objectiveHeader}>Sub-Objectives</h5>
    <div style={styles.subObjectivesGrid}>
      {subObjectives.map((subObjective, index) => (
        <div key={index} style={styles.subObjectiveItem}>{subObjective}</div>
      ))}
    </div>
  </div>
);

// Styles for modern, responsive design
const styles = {
  container: {
    margin: '2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    maxWidth: '800px',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
    fontSize: '2rem',
  },
  icon: {
    color: '#0073e6',
    verticalAlign: 'middle',
    marginRight: '0.5rem',
  },
  intro: {
    textAlign: 'center',
    color: '#555',
    marginBottom: '2rem',
  },
  subHeader: {
    color: '#333',
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  paragraph: {
    marginBottom: '2rem',
    color: '#555',
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  image: {
    borderRadius: '8px',
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
  },
  imageCaption: {
    color: '#555',
    fontStyle: 'italic',
    marginTop: '0.5rem',
  },
  card: {
    marginBottom: '2rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
  },
  cardHeader: {
    color: '#0073e6',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  cardDescription: {
    color: '#555',
  },
  componentIcon: {
    marginRight: '0.5rem',
    fontSize: '1.5rem',
  },
  objectiveHeader: {
    color: '#333',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '1rem',
  },
  cardText: {
    color: '#555',
  },
  subObjectivesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '1rem',
    padding: '0.5rem 0',
  },
  subObjectiveItem: {
    backgroundColor: '#eef',
    borderRadius: '4px',
    padding: '0.5rem',
    color: '#333',
    textAlign: 'center',
  },
};

// Media queries for responsive design
const mobileStyles = `
  @media (max-width: 600px) {
    .container {
      padding: 0.5rem;
    }
    .header {
      font-size: 1.5rem;
    }
    .subHeader {
      font-size: 1.2rem;
    }
    .card {
      padding: 0.5rem;
    }
    .cardHeader {
      font-size: 1.2rem;
    }
    .componentIcon {
      font-size: 1.2rem;
    }
    .cardText,
    .objectiveHeader {
      font-size: 0.9rem;
    }
    .subObjectiveItem {
      font-size: 0.8rem;
    }
  }
`;

// Inject mobile styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);

// Export the component
export default SystemArchitecturePage;
