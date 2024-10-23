import PropTypes from 'prop-types';

const Section = ({ title, content }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

// Define the expected types of props
Section.propTypes = {
  title: PropTypes.string.isRequired,   // Title must be a string and is required
  content: PropTypes.string.isRequired, // Content must be a string and is required
};

export default Section;
