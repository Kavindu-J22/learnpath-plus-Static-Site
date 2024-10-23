import styled from 'styled-components';
import { FaBrain, FaChartLine } from 'react-icons/fa';

const StyledAbstract = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #ecf0f1;
  line-height: 1.7;
  padding: 40px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }

  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #f39c12;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 10px;
      color: #f1c40f;
    }
  }

  p {
    margin-bottom: 20px;
    text-align: justify;
    font-weight: 300;
  }

  .highlight {
    font-weight: bold;
    color: #f1c40f;
  }

  .icon-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px 0;
    
    .icon-box {
      text-align: center;
      svg {
        font-size: 40px;
        color: #f39c12;
        transition: color 0.3s ease;
      }

      &:hover svg {
        color: #f1c40f;
      }

      h3 {
        font-size: 18px;
        color: #ecf0f1;
        margin-top: 10px;
      }
    }
  }

  /* Responsive Design for Mobile */
  @media (max-width: 768px) {
    padding: 20px;
    font-size: 14px;

    h1 {
      font-size: 22px;
    }

    .icon-section {
      flex-direction: column;
      margin: 20px 0;

      .icon-box {
        margin-bottom: 20px;
        
        h3 {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 12px;

    h1 {
      font-size: 20px;
    }

    .icon-section {
      .icon-box {
        svg {
          font-size: 30px;
        }
        
        h3 {
          font-size: 14px;
        }
      }
    }
  }
`;

const Abstract = () => {
  const abstractText = `
    LearnPath+ represents a groundbreaking e-learning platform that transcends conventional content 
    delivery methods by incorporating adaptive learning mechanisms. Through the application of 
    machine learning algorithms, LearnPath+ dynamically adjusts educational content to fit the unique 
    learning patterns, preferences, and performance of individual users. The system significantly 
    improves user engagement, knowledge retention, and overall satisfaction by offering personalized 
    learning paths that evolve in real time.

    This platform fills the gap left by traditional, static e-learning systems by addressing the 
    diverse needs of learners. Unlike the 'one-size-fits-all' approach of many digital education tools, 
    LearnPath+ provides a tailored learning experience, utilizing advanced analytics and reinforcement 
    learning algorithms to enhance educational outcomes.

    The study investigates how this approach redefines user interaction with digital content, offering 
    insights into the scalability and applicability of such adaptive learning technologies in the 
    modern educational landscape. Initial results indicate a 35% increase in user engagement and a 28% 
    improvement in knowledge retention, validating the effectiveness of LearnPath+ in enhancing 
    digital learning experiences.
  `;

  return (
    <StyledAbstract>
      <h1>
        Abstract <FaBrain />
      </h1>
      <p>{abstractText}</p>

      <div className="icon-section">
        <div className="icon-box">
          <FaChartLine />
          <h3>Improved Engagement</h3>
        </div>
        <div className="icon-box">
          <FaBrain />
          <h3>Adaptive Learning</h3>
        </div>
      </div>
    </StyledAbstract>
  );
};

export default Abstract;
