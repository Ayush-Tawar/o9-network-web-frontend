import DescriptionTextWithButton from "@/components/DescriptionTextWithButton";
import DropShadowText from "@/components/DropShadowText";
import SectionHeading from "@/components/SectionHeading";

export default function Publishers() {
  return (
    <>
      <div
        id="publishers"
        className="flex flex-col gap-3 items-center mt-[120px] md:pt-10 md:mt-0">
        <SectionHeading>publishers</SectionHeading>

        <DropShadowText>Monetize Your Traffic</DropShadowText>
        <DescriptionTextWithButton
          description1="
          Unlock new revenue streams with o9 Network. Our performance
          marketing solutions are designed to empower publishers with
          innovative tools and resources to monetize their traffic. From
          top-performing offers and competitive payouts to advanced tracking
          and optimization, o9 Network provides the platform and support you
          need to maximize your earnings."
          description2="Join us today and transform your website into a revenue-generating
          powerhouse!"
        />
      </div>
      <div className="relative">
        <div className="absolute brightness-100 left-0 right-0 md:bottom-[-200px] z-[-99] w-full overflow-x-hidden md:overflow-auto">
          <video
            autoPlay={true}
            loop={true}
            muted
            playsInline
            className="object-cover  md:h-auto md:w-full">
            <source src={"/videos/publisher.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
