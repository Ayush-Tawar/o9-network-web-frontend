import Image from "next/image";
import PropTypes from "prop-types";

export default function CustomImage({ className, src = "", alt = "-" }) {
  return (
    <div className={`relative ${className}`}>
      <Image alt={alt} fill src={src} />
    </div>
  );
}

CustomImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
