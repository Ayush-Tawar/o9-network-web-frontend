import BrandLogo from "@/components/BrandLogo";
import { onNavigate } from "@/components/Navbar";
import { FOOTER_LINKS } from "@/utils/mockData";

export default function Footer() {
  return (
    <div className="bg-darkBg border-t-[1px] md:border-0 border-white">
      <div className="default-max-width pt-[100px] mb-[100px] md:mb-[81px] flex flex-col md:flex-row md:justify-between md:max-w-7xl gap-[55px] font-bold footer-text tracking-wide uppercase  decoration-[0.1px] group underline-offset-4">
        <BrandLogo type="footer" />
        {FOOTER_LINKS.map((array, index) => {
          return (
            <div
              key={array + index}
              className="flex flex-col footer-gap cursor-pointer select-none ">
              {array.map((v) => {
                return (
                  <div
                    key={v.name}
                    onClick={() => onNavigate(v.navigateTo)}
                    className="hover:no-underline underline">
                    {v.name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="uppercase tracking-wide font-bold footer-copyright opacity-[60%] text-center pb-[12px]">
        © o9 Network 2023
      </div>
    </div>
  );
}
