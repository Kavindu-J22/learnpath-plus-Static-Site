import { FaBook, FaUsers, FaChartBar, FaRobot, FaGraduationCap, FaExclamationCircle } from 'react-icons/fa';

function LiteratureReview() {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Literature Review</h2>

      <Section title="Education and Accessibility" icon={<FaBook />}>
        <p>
          E-learning solutions have increasingly affected education, providing flexible, expandable options in the market.
          Progress has been made, though large-scale personalization remains challenging. This review examines current
          e-learning customization, the limitations of existing systems, and potential solutions via adaptive learning technologies.
        </p>
      </Section>

      <Section title="A. Current State of E-Learning Personalization" icon={<FaUsers />}>
        <p>
          Learning Management Systems (LMS) now incorporate customizations aimed at enhancing the learning experience.
          Personalization here primarily refers to content variations that respond to users’ needs, incorporating learner profiling,
          recommender systems, and adaptive content. Despite this, many e-learning systems offer only limited personalization,
          failing to satisfy diverse learner needs.
        </p>
      </Section>

      <Section title="B. Limitations of Existing E-Learning Systems" icon={<FaExclamationCircle />}>
        <p>
          Most current e-learning systems rely on static personalization techniques, where paths and content are predetermined.
          This restricts the ability to respond to learners&apos; evolving needs, leading to low engagement and retention.
          Additionally, uniform content delivery disregards individual learning differences, often causing low motivation and performance.
        </p>
      </Section>

      <Section title="C. Adaptive Learning Technologies" icon={<FaRobot />}>
        <p>
          Adaptive learning can address the limitations of static personalization by modifying learning paths in real time
          based on user data. Adaptive systems leverage machine learning to understand student behavior, predict performance,
          and recommend relevant content, catering to diverse learner needs and enhancing interaction and knowledge acquisition.
        </p>
      </Section>

      <Section title="D. Integrating Machine Learning in E-Learning" icon={<FaChartBar />}>
        <p>
          Machine Learning (ML) is a key driver for adaptive systems, identifying patterns and expected outcomes in learning data.
          Supervised and unsupervised ML methods (like decision trees, neural networks, and clustering) enhance e-learning,
          tailoring content to individual needs. Reinforcement learning can further improve adaptive systems by continuously
          refining recommendations based on learner input.
        </p>
      </Section>

      <Section title="E. User Experience and Engagement" icon={<FaGraduationCap />}>
        <p>
          Effective e-learning relies on quality user experience (UX) design, where interactivity, feedback, and navigation
          improve user satisfaction and learning outcomes. Research indicates that engaging UX design can keep learner interest,
          thereby supporting better results and sustained engagement.
        </p>
      </Section>

      <Section title="F. Gaps in the Literature" icon={<FaExclamationCircle />}>
        <p>
          While adaptive learning shows promise, limited empirical data exists on its effectiveness in real-world settings.
          Small-scale studies indicate positive outcomes, but larger, long-term deployments remain scarce, highlighting
          the need for comprehensive research comparing adaptive and traditional e-learning.
        </p>
      </Section>

      <Table title="Table 1: Summary of Research Focus in Adaptive Learning Technologies" />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Section = ({ title, children, icon }) => (
  <div style={styles.section}>
    <div style={styles.summary}>
      {icon && <span style={styles.icon}>{icon}</span>}
      <h3 style={styles.title}>{title}</h3>
    </div>
    <div style={styles.content}>{children}</div>
  </div>
);

// eslint-disable-next-line react/prop-types
const Table = ({ title }) => (
  <div style={styles.tableContainer}>
    <h3 style={styles.tableTitle}>{title}</h3>
    <table style={styles.table}>
      <thead>
        <tr style={styles.tableHeader}>
          <th style={styles.tableCell}>Research Focus Area</th>
          <th style={styles.tableCell}>Number of Studies</th>
          <th style={styles.tableCell}>Key Findings</th>
          <th style={styles.tableCell}>Research Gaps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.tableCell}>Theoretical Models</td>
          <td style={styles.tableCell}>40</td>
          <td style={styles.tableCell}>Conceptual frameworks and algorithms for adaptive learning</td>
          <td style={styles.tableCell}>Lack of empirical validation in real-world settings</td>
        </tr>
        <tr>
          <td style={styles.tableCell}>Small-Scale Experiments</td>
          <td style={styles.tableCell}>25</td>
          <td style={styles.tableCell}>Positive outcomes in controlled environments</td>
          <td style={styles.tableCell}>Limited scalability; results may not generalize</td>
        </tr>
        <tr>
          <td style={styles.tableCell}>Large-Scale Deployments</td>
          <td style={styles.tableCell}>8</td>
          <td style={styles.tableCell}>Potential but lacks comprehensive data</td>
          <td style={styles.tableCell}>Insufficient data on long-term effectiveness</td>
        </tr>
        <tr>
          <td style={styles.tableCell}>Comparison with Traditional E-Learning</td>
          <td style={styles.tableCell}>12</td>
          <td style={styles.tableCell}>Improved engagement and retention</td>
          <td style={styles.tableCell}>Few robust comparative analyses</td>
        </tr>
      </tbody>
    </table>
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
  section: {
    marginBottom: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
  },
  summary: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '0.5rem',
    color: '#0073e6',
  },
  content: {
    paddingLeft: '1rem',
    paddingTop: '0.5rem',
  },
  tableContainer: {
    marginTop: '2rem',
    marginBottom: '5rem',
  },
  tableTitle: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  tableHeader: {
    backgroundColor: '#0073e6',
    color: '#fff',
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '8px',
    fontSize: '0.9rem',
  },
};

// Media query for mobile responsiveness
const mobileStyles = `
  @media (max-width: 600px) {
    .container {
      padding: .5rem;
    }
    .header {
      font-size: 1.5rem;
    }
    .summary {
      font-size: 1rem;
    }
    .tableCell {
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
export default LiteratureReview;
