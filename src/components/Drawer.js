import Button from "./Button";
import { NAV_LINKS } from "@/utils/mockData";
import CustomImage from "./CustomImage";

export default function NavDrawer({ isOpen, setIsOpen, onNavigate }) {
  const handleClick = (link) => {
    setIsOpen(false);
    setTimeout(() => {
      onNavigate(link);
    }, 50);
  };
  return (
    <main
      className={
        "fixed overflow-hidden z-40 bg-opacity-25 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-300 translate-y-0"
          : " transition-all delay-200 opacity-0 -translate-y-full")
      }>
      <section
        className={
          "font-bold text-black uppercase tracking-wide top-0 left-0 right-0 max-sm:bottom-0 md:left-auto md:right-0 absolute md:w-[300px] bg-black delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? "translate-y-0" : "transition-transform -translate-y-full")
        }>
        <div className="mt-[66px] md:mt-5 mx-[12px] ">
          <div className="drawer-div card-gradient aspect-[0.91]">
            <div
              className="flex justify-end px-5 pt-4"
              onClick={() => {
                setIsOpen(false);
              }}>
              <CustomImage
                src="/images/closeDrawer.svg"
                className="aspect-square w-[38px] cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-between px-10 pb-[27px] mt-8 md:mt-8 xl:mt-6 ">
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((v, i) => {
                  return (
                    <p
                      key={v.name}
                      onClick={() => handleClick(v.navigateTo)}
                      className="select-none cursor-pointer text-[26px] md:text-[18px]">
                      {v.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-5 md:pb-2 mt-[21px] md:mt-[12px]">
          <div className="cursor-pointer tracking-wider text-white text-[21px] md:text-[16px] font-medium md:px-[45px] py-[13px]">
            LOGIN
          </div>
          <div>
            <Button type="solid" color="primary" isDrawer={true}>
              sign up
            </Button>
          </div>
        </div>
      </section>

      <section
        className="h-full cursor-pointer w-full"
        onClick={() => {
          setIsOpen(false);
        }}
      />
    </main>
  );
}
