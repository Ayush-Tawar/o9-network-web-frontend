import PropTypes from "prop-types";

const TabBar = (props) => {
  const { children, setActive, active, className, type } = props;
  const commonParentCss = `relative py-2 px-3 border-primary select-none`;
  const commonChildCss = `before:absolute before:border-primary before:border-[1px]`;
  if (type == "top-left") {
    return (
      <div
        id="1"
        onClick={() => setActive(1)}
        className={`${commonParentCss} relative flex-1 tabBar-topLeft-corner py-2 px-3 ${
          active == 1 && "bg-primary"
        } border-primary border-2`}>
        <div
          className={`${commonChildCss} ${
            active == 1 && "text-black"
          } before:absolute before:top-0 before:-skew-x-[44deg] before:left-[-4px] before:h-[22px]`}>
          {children}
        </div>
      </div>
    );
  }
  if (type == "top-right") {
    return (
      <div
        id="3"
        onClick={() => setActive(3)}
        className={`${commonParentCss} ${
          active == 3 && "bg-primary"
        } flex-1 tabBar-topRight-corner  border-[2px]`}>
        <div
          className={`${commonChildCss} ${
            active == 3 && "text-black"
          } before:top-0 before:skew-x-[48deg] before:right-[-5px] before:h-[21px] before:border-[1px]`}>
          {children}
        </div>
      </div>
    );
  }
  if (type == "bottom-left") {
    return (
      <div
        id="4"
        onClick={() => setActive(4)}
        className={`${commonParentCss} ${
          active == 4 && "bg-primary"
        } flex-2 tabBar-bottomLeft-corner  border-r-[1px] border-l-[2px] border-b-[2.8px]`}>
        <div
          className={`${commonChildCss} ${
            active == 4 && "text-black"
          } before:bottom-0 before:skew-x-[50deg] before:left-[-5.5px] before:h-[21px] before:border-[1px]`}>
          {children}
        </div>
      </div>
    );
  }
  if (type == "center") {
    return (
      <div
        id="2"
        onClick={() => setActive(2)}
        className={`${commonParentCss} ${
          active == 2 && "bg-primary text-black"
        } flex-1 border-[2px] tabBar-normal-corner`}>
        {children}
      </div>
    );
  }
  return (
    <div
      id="5"
      onClick={() => setActive(5)}
      className={`${commonParentCss} ${
        active == 5 && "text-black bg-primary"
      } flex-2 tabBar-normal-corner  border-x-[2px] border-b-[2px]`}>
      {children}
    </div>
  );
};

TabBar.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    "top-left",
    "top-right",
    "bottom-left",
    "center",
    "none",
  ]).isRequired,
};

TabBar.defaultProps = {
  children: [],
  className: "",
  onClick: () => {},
  type: "none",
};

export default TabBar;
