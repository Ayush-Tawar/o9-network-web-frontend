import { useRouter } from "next/router";
import PropTypes from "prop-types";
import CustomImage from "./CustomImage";

function BrandLogo(props) {
  const router = useRouter();
  const { type } = props;

  const handleClick = () => {
    router.push("/");
  };

  if (type === "primary") {
    return (
      <span onClick={handleClick}>
        <CustomImage src="/images/brandLogo.svg" className="nav-logo" />
      </span>
    );
  }

  return (
    <span onClick={handleClick}>
      <CustomImage src="/images/brandLogoWhite.svg" className="footer-logo" />
    </span>
  );
}

BrandLogo.propTypes = {
  type: PropTypes.oneOf(["primary", "footer"]).isRequired,
};

BrandLogo.defaultProps = {
  type: "primary",
};

export default BrandLogo;
