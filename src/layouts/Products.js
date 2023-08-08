import ProductCards from "@/components/ProductCards";
import TabBar from "@/components/TabBar";
import { PROJECTS } from "@/utils/mockData";
import { useState } from "react";

export default function Products() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section id="products" className="md:pt-1">
      <div className="mt-[30px] md:mt-[46px] mb-10 flex md:hidden flex-col space-y-[-1.1px] uppercase font-medium text-primary border-primary default-max-width">
        <div className="flex flex-1 text-center items-center justify-center space-x-[-3px]">
          <TabBar type="top-left" setActive={setActiveTab} active={activeTab}>
            sweepstakes
          </TabBar>
          <TabBar type="center" setActive={setActiveTab} active={activeTab}>
            Nutra
          </TabBar>
          <TabBar type="top-right" setActive={setActiveTab} active={activeTab}>
            crypto
          </TabBar>
        </div>
        <div className="flex border-primary text-center items-center justify-center space-y-[-1.2px] space-x-[-2px]">
          <div className="flex-1" />
          <TabBar
            type="bottom-left"
            setActive={setActiveTab}
            active={activeTab}>
            dating
          </TabBar>
          <TabBar type="none" setActive={setActiveTab} active={activeTab}>
            casino
          </TabBar>
          <div className="flex-1" />
        </div>
      </div>
      <div className="hidden md:grid grid-flow-row  md:grid-cols-1 lg:grid-cols-2 min-[1500px]:grid-cols-3  col-span-1 gap-[50px] mt-[200px] mb-[200px] grid-rows-2 default-max-width">
        {PROJECTS.map((v, i) => (
          <ProductCards
            key={i}
            title={v.title}
            description={v.description}
            glassEffect={v.glassEffect}
          />
        ))}
      </div>
      <div className="md:hidden flex items-center justify-center overflow-x-scroll default-max-width">
        <ProductCards
          title={PROJECTS[activeTab - 1].title}
          description={PROJECTS[activeTab - 1].description}
        />
      </div>
    </section>
  );
}
