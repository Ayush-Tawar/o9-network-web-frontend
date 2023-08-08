import PropTypes from "prop-types";

function SectionHeading(props) {
  const { children, className } = props;
  return (
    <h2
      className={`${className} uppercase text-center section-heading-text-size font-bold mb-5 tracking-wide`}>
      {children}
    </h2>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

SectionHeading.defaultProps = {
  children: [],
  className: "",
};

export default SectionHeading;
