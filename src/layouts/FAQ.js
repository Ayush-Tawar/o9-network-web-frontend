import CustomImage from "@/components/CustomImage";
import DropShadowText from "@/components/DropShadowText";
import { FAQ_DATA } from "@/utils/mockData";
import { useState } from "react";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const renderList = () => {
    return FAQ_DATA.map((item, index) => {
      const key = `${item.question}${index}`;
      return (
        <div
          key={key}
          className="flex flex-row"
          onClick={() => setIsOpen(isOpen === key ? false : key)}>
          <div className="flex flex-1 flex-col px-4 faq-gap">
            <div
              className="font-bold faq-question uppercase leading-[1.5rem] md:leading-8 max-w-[95%] md:max-w-[100%] "
              dangerouslySetInnerHTML={{ __html: item.question }}
            />
            <div
              className={`${
                isOpen === key ? "flex" : "hidden"
              } opacity-70 mb-2 max-w-[92%] faq-answer leading-[1.4rem] md:leading-7 md:max-w-[100%]`}
              dangerouslySetInnerHTML={{
                __html: item.answer,
              }}
            />
          </div>
          <div className="md:mx-4 md:pr-0 mt-[4px] md:mt-[2px]">
            <div className="relative cursor-pointer text-white">
              {isOpen === key ? (
                <div>
                  <CustomImage
                    src="/images/dash.svg"
                    alt="close"
                    className="faq-dash"
                  />
                </div>
              ) : (
                <div>
                  <CustomImage
                    src="/images/add.svg"
                    alt="open"
                    className="faq-plus"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div
        id="faq"
        className="faq-margin mb-32 md:pt-10 flex flex-col gap-10 default-max-width">
        <div className="md:mb-[50px]">
          <DropShadowText withLine={false}>faqs</DropShadowText>
        </div>
        <div className="space-y-[23px] md:space-y-[60px]">{renderList()}</div>
      </div>
    </>
  );
}
