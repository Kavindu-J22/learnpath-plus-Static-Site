import styled from 'styled-components';
import { FaUser, FaChalkboardTeacher } from 'react-icons/fa';
import Mem1 from "../assets/mem1.jpg"
import Mem2 from "../assets/mem2.jpg"
import Mem3 from "../assets/mem3.jpg"
import Mem4 from "../assets/mem4.jpg"

// Styled component for the About Us section
const StyledAboutUs = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #ecf0f1;
  padding: 40px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  h1 {
    font-size: 36px;
    font-weight: bold;
    color: #f39c12;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }

  .team-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid layout */
    gap: 20px; /* Space between cards */
    margin-top: 30px;

    .team-member {
      background-color: #2c3e50;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      text-align: center;
      padding: 20px;
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      img {
        width: 100px; /* Set fixed width for images */
        height: 100px; /* Set fixed height for images */
        border-radius: 50%; /* Circular images */
        margin-bottom: 15px;
        border: 3px solid #f39c12; /* Circular border */
      }

      svg {
        font-size: 50px;
        color: #f39c12;
        margin: 10px 0;
      }

      h3 {
        margin: 10px 0;
        font-size: 22px;
        color: #f1c40f;
      }

      p {
        font-size: 14px;
        color: #bdc3c7;
      }
    }
  }

  .supervisor-section {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .supervisor {
      background-color: #2c3e50;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      text-align: center;
      padding: 20px;
      margin: 0 15px;
      width: 300px;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      svg {
        font-size: 50px;
        color: #f39c12;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 22px;
        color: #f39c12;
      }

      p {
        font-size: 16px;
        color: #bdc3c7;
      }
    }
  }
`;

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h1>About Us</h1>

      <div className="team-section">
        
        <div className="team-member">
          <img src={Mem1} alt="N.A.P.K.R. Nishshanka" />
          <FaUser />
          <h3>N.A.P.K.R. Nishshanka</h3>
          <p>Team Member | Dept. of Information Technology</p>
        </div>

        <div className="team-member">
          <img src={Mem2} alt="K.A.K.N. Jayasinghe" />
          <FaUser />
          <h3>K.A.K.N. Jayasinghe</h3>
          <p>Team Member | Dept. of Information Technology</p>
        </div>

        <div className="team-member">
            <img src={Mem3} alt="N.A.G.A.A. Nishshanka" />
            <FaUser />
            <h3>N.A.G.A.A. Nishshanka</h3>
            <p>Team Member | Dept. of Information Technology</p>
          </div>

          <div className="team-member">
            <img src={Mem4} alt="R.M.S.P. Abeykoon" />
            <FaUser />
            <h3>R.M.S.P. Abeykoon</h3>
            <p>Team Member | Dept. of Information Technology</p>
          </div>

        </div>

      <div className="supervisor-section">
        <div className="supervisor">
          <FaChalkboardTeacher />
          <h3>Sanjeevi Chandrasiri</h3>
          <p>Supervisor | Senior Lecturer at SLIIT</p>
        </div>
        <br/>
        <div className="supervisor">
          <FaChalkboardTeacher />
          <h3>Akshi De Silva</h3>
          <p>Co-Supervisor | Lecturer at SLIIT</p>
        </div>
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
