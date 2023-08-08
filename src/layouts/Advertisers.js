import CustomImage from "@/components/CustomImage";
import DescriptionTextWithButton from "@/components/DescriptionTextWithButton";
import DropShadowText from "@/components/DropShadowText";
import SectionHeading from "@/components/SectionHeading";
import { ADVERTISERS_OFFERS } from "@/utils/mockData";

export default function Advertisers() {
  return (
    <div className="advertisers-margin md:pt-10" id="advertisers">
      <SectionHeading>ADVERTISERS</SectionHeading>
      <div className="flex flex-col gap-3  items-center mb-20 default-max-width">
        <DropShadowText>Advertise with Confidence</DropShadowText>
        <div>
          <DescriptionTextWithButton
            description1="
          o9 Network empowers advertisers with innovative solutions for
          unparalleled performance marketing success. Our cutting-edge
          technology, expert guidance, and top-performing affiliates drive
          superior results. From advanced tracking to optimization tools, we
          offer the resources needed to fuel your marketing success. Boost brand
          awareness, increase conversions, and expand your reach with o9
          Network."
            description2="Contact us now to elevate your advertising strategy to new heights."
          />
        </div>
        <div className="flex items-center justify-center flex-wrap default-max-width max-w-6xl advertisers-offers md:mb-[120px] font-bold tracking-wide ">
          {ADVERTISERS_OFFERS.map((v, i) => (
            <div
              key={v.title}
              className="flex flex-col items-center advertisers-offers-icons-gap uppercase">
              <CustomImage
                src={v.image}
                alt={v.title}
                className="advertisers-offers-icons-width aspect-[1.16]"
              />
              {v.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
