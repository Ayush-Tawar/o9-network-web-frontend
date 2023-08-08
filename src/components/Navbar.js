import { NAV_LINKS } from "@/utils/mockData";
import BrandLogo from "./BrandLogo";
import Button from "./Button";
import CustomImage from "./CustomImage";
import { useEffect, useState } from "react";
import NavDrawer from "./Drawer";

export const onNavigate = (id) => {
  try {
    document.getElementById(id).scrollIntoView();
  } catch (error) {
    console.error(error);
  }
};
export default function NavBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isDrawerOpen]);
  const navLineCss = `bg-white w-full h-[1px] absolute md:block top-5 md:top-4 after:hidden md:after:block before:hidden md:before:block md:after:absolute after:h-[7px] before:h-[7px] after:nav-line-design-after after:bg-black after:border-r-[2px] after:border-t-[1px] after:border-white after:mx-auto after:bottom-[.1px] after:nav-line-design-after after:skew-x-[65deg] after:z-[10] md:before:absolute  before:nav-line-design-before before:bg-black before:border-t-[1px] before:border-l-[2px] before:border-white before:mx-auto before:bottom-[.1px] before:nav-line-design-before before:-skew-x-[65deg] before:z-[3]`;
  return (
    <>
      <div className="flex items-center justify-between mt-[29px] font-medium uppercase text-[18px] default-max-width">
        <div className="flex-1">
          <BrandLogo type={"primary"} />
        </div>
        <div className="flex-4 hidden min-[1300px]:flex items-center text-center justify-center nav-links-gap">
          {NAV_LINKS.map((v, i) => (
            <div
              key={v.name}
              onClick={() => onNavigate(v.navigateTo)}
              className="tracking-wider p-2 cursor-pointer">
              {v.name}
            </div>
          ))}
        </div>
        <div className="hidden min-[1300px]:flex gap-2 items-start text-[18px]">
          <div className="p-2 cursor-pointer tracking-wide">LOGIN</div>
          <div>
            <Button type="solid" color="primary">
              sign up
            </Button>
          </div>
        </div>
        <div
          className="min-[1300px]:hidden cursor-pointer p-1"
          onClick={() => {
            setDrawerOpen(true);
          }}>
          <CustomImage
            src="/images/drawer.svg"
            className="aspect-square w-6 "
          />
        </div>
      </div>
      <div className="relative">
        <div className={navLineCss} />
        <div className="absolute hidden md:block top-4 nav-rect-position">
          <CustomImage
            src="/images/navRect.svg"
            alt="rect"
            className="w-[100px] min-[1241px]:w-[140px] aspect-[17.17]"
          />
        </div>
        <NavDrawer
          isOpen={isDrawerOpen}
          setIsOpen={setDrawerOpen}
          onNavigate={onNavigate}
        />
      </div>
    </>
  );
}
