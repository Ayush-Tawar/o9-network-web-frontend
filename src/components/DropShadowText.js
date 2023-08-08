import TitleLine from "./TitleLine";
import PropTypes from "prop-types";

function DropShadowText(props) {
  const { children, withLine, className } = props;
  return (
    <div
      className={`${
        withLine ? "w-[70vw] md:w-auto" : "mx-auto"
      } flex flex-col gap-3 items-center justify-center`}>
      <h1
        className={`text-white ${className} dropshadow-text-size tracking-wider uppercase text-center font-bold text-shadow-hero leading-10 md:leading-none`}>
        {children}
      </h1>
      {withLine && <TitleLine />}
    </div>
  );
}

DropShadowText.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  withLine: PropTypes.bool,
};

DropShadowText.defaultProps = {
  children: [],
  className: "",
  withLine: true,
};

export default DropShadowText;
