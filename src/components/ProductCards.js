import PropTypes from "prop-types";

function ProductCards(props) {
  const { title, description, onClick, className } = props;

  const commonMainDivCss =
    "group relative flex flex-col sm:h-full pb-[40px] justify-between px-[20px] py-[52px] md:pt-[45px] md:pl-[45px] md:pr-[25px] pb-[20px] select-none tracking-wider md:min-w-[350px] max-w-[500px] md:max-w-[500px] aspect-[1.09] md:aspect-[1.85]";
  const commonTitleCss =
    "uppercase font-bold text-[32px] text-shadow-hero max-md:text-black max-md:text-shadow-none md:group-hover:text-black md:group-hover:text-shadow-none";
  const commonDescriptionCss =
    "text-[17px]  font-medium tracking-wide flex w-full items-end leading-5 max-md:text-black md:group-hover:text-black";
  const commonGapCss = `flex flex-col md:mb-5 gap-2 md:gap-1`;
  const commonCardBg = `hover:card-gradient backdrop-blur-[10px]`;
  const commonDivShape = "project-card-mobile md:project-card-desktop";
  const commonLineCss =
    "h-2 w-20 md:h-1 md:w-20 md:bg-white bg-black md:group-hover:bg-black";

  return (
    <div className="relative">
      <div
        onClick={onClick}
        className={`md:bg-[url(/images/pbox.svg)] md:aspect-[1.855] md:backdrop-blur-[10px] md:hover:backdrop-blur-none md:hover:bg-[url(/images/pboxHovered.svg)] max-[768px]:project-card-mobile card-gradient bg-no-repeat bg-cover md:w-[450px] md:mx-auto`}>
        <div className={`${className} ${commonMainDivCss} `}>
          <div className={`${commonGapCss} `}>
            <div className={commonLineCss} />
            <h1 className={commonTitleCss}>{title}</h1>
          </div>
          <div className={commonDescriptionCss}>
            <div className="hidden md:flex flex-1" />
            <div className="flex-5">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  glassEffect: PropTypes.bool,
};

ProductCards.defaultProps = {
  title: "",
  description: "",
  className: "",
  onClick: () => {},
  glassEffect: false,
};

export default ProductCards;
