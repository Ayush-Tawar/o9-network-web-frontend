import PropTypes from "prop-types";
import Button from "./Button";

function DescriptionTextWithButton(props) {
  const { description1, description2 } = props;
  let commonCss = "description-text default-max-width";
  return (
    <>
      <div className={`${commonCss} md:hidden`}>
        <p className="text-justify mx-8">
          {description1} <br /> <br />
        </p>
        <p className="text-justify mx-8">{description2}</p>
        <div className="mt-20">
          <Button type="solid" color="primary">
            let&apos;s chat
          </Button>
        </div>
      </div>
      <div className={`${commonCss} hidden md:flex justify-between max-w-6xl`}>
        <div className="flex-2">
          <p className="text-left max-w-[83%] ">{description1}</p>
        </div>
        <div className="flex-1 items-center flex flex-col justify-between">
          <p className="text-left ">{description2}</p>
          <div className="mt-20">
            <Button type="solid" color="primary">
              let&apos;s chat
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

DescriptionTextWithButton.propTypes = {
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  className: PropTypes.string,
};

DescriptionTextWithButton.defaultProps = {
  description1: "",
  description2: "",
  className: "",
};

export default DescriptionTextWithButton;
