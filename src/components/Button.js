import PropTypes from "prop-types";

const Button = (props) => {
  const { className, type, color, children, isDrawer, onClick } = props;

  let parentDivCss = "max-w-[150px] md:max-w-[220px] mx-auto select-none";
  let mainDivCss =
    "group relative cursor-pointer select-none z-0 font-medium border-2 border-transparent btn-outlined tracking-wider button-corners ";
  let commonBgTextRenderCss = `absolute z-[1] text-gradient-primary inset-0 flex flex-1 mb-2 items-center justify-center`;
  let commonBgRenderCss = `absolute inset-0 button-corners`;
  let commonPaddingTextCss = `md:px-[45px] py-[18px] md:py-[22px] md:text-[18px]`;
  if (type == "outlined" && color == "primary") {
    const buttonBorder = "primary-outlined-button-gradient";
    const bgRender = (
      <div
        className={`${commonBgRenderCss} bg-black group-hover:primary-outlined-button-gradient transition ease-out duration-75`}
      />
    );
    const btnTextRender = (
      <div className={`${commonBgTextRenderCss} group-hover:text-black`}>
        {children}
      </div>
    );
    return (
      <div className={`${parentDivCss}`}>
        <div
          onClick={onClick}
          className={`${className} ${buttonBorder} ${mainDivCss} ${commonPaddingTextCss} hover:text-transparent`}>
          {children}
          {btnTextRender}
          {bgRender}
        </div>
        {/* <div className="absolute text-[8px] uppercase  font-bold text-white bg-black right-5 bottom-3 px-1">
          v1.1
        </div> */}
      </div>
    );
  }
  if (type == "solid" && color == "primary") {
    const buttonBorder = "primary-outlined-button-gradient";
    const bgRender = (
      <div className={`${commonBgRenderCss} group-hover:bg-black`} />
    );
    const btnTextRender = (
      <div
        className={`${commonBgTextRenderCss} text-black group-hover:text-gradient-primary`}>
        {children}
      </div>
    );
    return (
      <div className={`${parentDivCss}`}>
        <div
          onClick={onClick}
          className={`${className} ${buttonBorder} ${mainDivCss} text-transparent ${
            children == "sign up"
              ? isDrawer
                ? "px-[20px] md:px-[44px] py-[16px] md:py-[14px] text-[20px] md:text-[16px]"
                : "px-[40px] md:px-[30px] py-[14px] md:text-[18px]"
              : commonPaddingTextCss
          }`}>
          {children}
          {btnTextRender}
          {bgRender}
        </div>
        {/* <div className="absolute text-[8px] uppercase  font-bold text-white bg-black right-5 bottom-3 px-1">
          v1.1
        </div> */}
      </div>
    );
  }
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["outlined", "solid"]).isRequired,
  isDrawer: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary"]),
  glassEffect: PropTypes.bool,
};

Button.defaultProps = {
  children: [],
  className: "",
  onClick: () => {},
  type: "outlined",
  color: "primary",
  glassEffect: false,
  isDrawer: false,
};

export default Button;
