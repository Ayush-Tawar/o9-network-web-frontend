import Button from "@/components/Button";
import DropShadowText from "@/components/DropShadowText";
import NavBar from "@/components/Navbar";

export default function Hero() {
  return (
    <>
      <NavBar />
      <div className="relative w-full">
        <div className="absolute brightness-50 md:brightness-100 earth-position right-0 left-0 z-[-99] w-full overflow-x-hidden">
          <video
            autoPlay={true}
            loop={true}
            muted
            playsInline
            className="object-cover h-[80vh] overflow-hidden md:h-auto md:w-full">
            <source src={"/videos/earth.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
      <section className="flex flex-col">
        <div className="flex justify-center items-center hero-heading mx-auto default-max-width">
          <DropShadowText withLine={false}>
            supercharge your performance marketing
          </DropShadowText>
        </div>

        <div className="max-[425px]:black-gradient pb-20 mt-60 md:mt-[40px] h-full ">
          <div className="hero-sub-heading opacity-70 tracking-wide  text-center default-max-width ">
            Empowering Advertisers and Publishers with o9 Network&apos;s
            Innovative Solutions
          </div>
          <div className="mt-10 ">
            <Button type="outlined" color="primary" className="md:text-[23px]">
              let&apos;s chat
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
