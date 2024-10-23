import styled from 'styled-components';
import { FaCogs, FaUserGraduate, FaChartLine, FaSync } from 'react-icons/fa';

const StyledMethodology = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #ecf0f1;
  padding: 40px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 20px;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #f39c12;
    text-align: center;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
      margin-left: 10px;
      color: #f1c40f;
    }
  }

  p {
    margin-bottom: 40px;
    text-align: justify;
    font-size: 16px;
    line-height: 1.7;
    color: #bdc3c7;
  }

  .component-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .component-box {
      background-color: #34495e;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      }

      svg {
        font-size: 50px;
        color: #f39c12;
      }

      h3 {
        margin-top: 20px;
        font-size: 22px;
        color: #f39c12;
        text-align: center;
        text-transform: uppercase;
      }

      p {
        font-size: 14px;
        color: #ecf0f1;
        margin-top: 20px;
        line-height: 1.6;
      }

      .icon-bg {
        position: absolute;
        top: -40px;
        right: -40px;
        font-size: 150px;
        color: rgba(243, 156, 18, 0.1);
        z-index: 0;
      }

      .content {
        position: relative;
        z-index: 1;
      }
    }
  }
`;

const Methodology = () => {
  return (
    <StyledMethodology>
      <h1>
        Methodology <FaCogs />
      </h1>
      <p>
        The LearnPath+ platform is built on a robust methodology designed to provide a personalized learning experience through cutting-edge technology. The platform consists of four key components, each leveraging machine learning to adapt to the needs and learning preferences of individual students. These components work in harmony to deliver a seamless, adaptive learning environment.
      </p>

      <div className="component-section">
        <div className="component-box">
          <FaUserGraduate className="icon-bg" />
          <div className="content">
            <FaUserGraduate />
            <h3>Student Learning Profiling Module</h3>
            <p>
              This component collects and analyzes data related to the learners&apos; previous performance, learning styles, and preferences. It creates a comprehensive profile for each student, allowing the system to deliver personalized learning experiences. Machine learning algorithms ensure that these profiles are constantly updated, adapting to the user&apos;s progress and feedback.
            </p>
          </div>
        </div>

        <div className="component-box">
          <FaChartLine className="icon-bg" />
          <div className="content">
            <FaChartLine />
            <h3>Adaptive Recommendation Engine</h3>
            <p>
              The Recommendation Engine suggests learning materials based on the student&apos;s profile and predicted performance. By analyzing past behavior and using supervised learning, the system recommends resources such as video lectures, tutorials, and quizzes, tailored to improve engagement and performance.
            </p>
          </div>
        </div>

        <div className="component-box">
          <FaSync className="icon-bg" />
          <div className="content">
            <FaSync />
            <h3>Dynamic Learning Pathway Generator</h3>
            <p>
              This component generates personalized learning pathways that adapt in real-time to each student’s performance and preferences. It creates sequences of courses, quizzes, and assignments to optimize learning outcomes. With reinforcement learning, the pathway generator continuously improves based on feedback and results.
            </p>
          </div>
        </div>

        <div className="component-box">
          <FaCogs className="icon-bg" />
          <div className="content">
            <FaCogs />
            <h3>Comprehensive User Interaction & Feedback Loop</h3>
            <p>
              This module collects data from user interactions, tracking engagement metrics and performance. It provides insights into how the learning system is performing and adapts based on the feedback provided by students and educators. The feedback loop ensures that LearnPath+ remains flexible and responsive to the needs of its users.
            </p>
          </div>
        </div>
      </div>
    </StyledMethodology>
  );
};

export default Methodology;
