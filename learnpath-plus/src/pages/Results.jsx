import styled from 'styled-components';
import { FaChartBar, FaUsers, FaThumbsUp, FaCheckCircle } from 'react-icons/fa';

const StyledResults = styled.div`
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

  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;

    .stat-box {
      background-color: #34495e;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

        svg {
          transform: scale(1.1);
        }
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
        margin-top: 10px;
        line-height: 1.5;
        text-align: center;
      }

      &::before {
        content: '';
        position: absolute;
        top: -50px;
        right: -50px;
        width: 120px;
        height: 120px;
        background: rgba(243, 156, 18, 0.1);
        border-radius: 50%;
        transition: all 0.3s ease;
        z-index: 0;
      }

      .content {
        position: relative;
        z-index: 1;
      }
    }
  }
`;

const Results = () => {
  return (
    <StyledResults>
      <h1>
        Results <FaChartBar />
      </h1>
      <p>
        The implementation of LearnPath+ demonstrated significant improvements in several key areas, particularly in user engagement, knowledge retention, and overall satisfaction. Through the use of personalized learning paths and machine learning algorithms, LearnPath+ has achieved remarkable success, surpassing traditional e-learning systems. The results highlight the platform&apos;s effectiveness in enhancing digital education experiences.
      </p>

      <div className="stats-section">
        <div className="stat-box">
          <FaUsers />
          <div className="content">
            <h3>35% Boost in Engagement</h3>
            <p>
              LearnPath+ increased user engagement by 35%, encouraging more active participation and interaction with the educational content compared to standard learning platforms.
            </p>
          </div>
        </div>

        <div className="stat-box">
          <FaCheckCircle />
          <div className="content">
            <h3>28% Improvement in Retention</h3>
            <p>
              The adaptive learning paths led to a 28% improvement in knowledge retention, as users were able to retain information more effectively through personalized content delivery.
            </p>
          </div>
        </div>

        <div className="stat-box">
          <FaThumbsUp />
          <div className="content">
            <h3>22% Higher User Satisfaction</h3>
            <p>
              Self-assessment scores showed a 22% increase in user satisfaction, with learners rating the platform more favorably than traditional e-learning systems.
            </p>
          </div>
        </div>

        <div className="stat-box">
          <FaChartBar />
          <div className="content">
            <h3>Performance Gains</h3>
            <p>
              Users demonstrated improved performance with adaptive recommendations, as evidenced by their enhanced test scores and overall progress throughout their learning journey.
            </p>
          </div>
        </div>
      </div>
    </StyledResults>
  );
};

export default Results;
