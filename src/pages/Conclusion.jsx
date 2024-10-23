import styled from 'styled-components';
import { FaLightbulb, FaRegArrowAltCircleRight } from 'react-icons/fa';

const StyledConclusion = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #ecf0f1;
  padding: 40px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 0;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #f39c12;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1; // To position above the background

    svg {
      margin-left: 10px;
      color: #f1c40f;
    }
  }

  p {
    margin-bottom: 30px;
    text-align: justify;
    font-size: 16px;
    line-height: 1.8;
    z-index: 1; // To position above the background
  }

  .highlight {
    font-weight: bold;
    color: #f1c40f;
  }

  .next-steps {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1; // To position above the background
    
    svg {
      font-size: 28px;
      color: #f1c40f;
      margin-right: 10px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
    
    h2 {
      font-size: 22px;
      color: #ecf0f1;
      font-weight: bold;
    }
  }
`;

const Conclusion = () => {
  const conclusionText = `
    The LearnPath+ framework has proven to be an effective and scalable solution for improving 
    personalized digital education. By leveraging adaptive learning technologies, machine 
    learning algorithms, and user feedback, it has successfully increased user engagement, 
    retention, and overall satisfaction. The system is flexible, continually evolving based 
    on learner data, which positions it as a significant improvement over traditional static 
    e-learning platforms.
    
    Future research could focus on implementing reinforcement learning to further enhance 
    real-time personalization of learning paths. This will enable the system to not only adapt 
    based on predefined models but to evolve dynamically as learners progress. Additionally, 
    testing LearnPath+ in different educational contexts and with larger datasets could 
    further validate its effectiveness and provide deeper insights into its adaptability and 
    scalability in broader settings.
  `;

  return (
    <StyledConclusion>
      <h1>
        Conclusion <FaLightbulb />
      </h1>
      <p>{conclusionText}</p>

      <div className="next-steps">
        <FaRegArrowAltCircleRight />
        <h2>Next Steps: Further Exploration with Reinforcement Learning</h2>
      </div>
    </StyledConclusion>
  );
};

export default Conclusion;
