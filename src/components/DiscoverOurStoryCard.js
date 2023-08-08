import CustomImage from "./CustomImage";

export default function DiscoverOurStoryCard() {
  return (
    <>
      <div className="our-story-card md:our-story-card-desktop px-2 py-2 mt-10 md:mt-0 md:pt-10 relative flex flex-col gap-2 pt-2 items-center justify-center card-gradient text-black font-bold discover-our-story-card uppercase md:aspect-[1.0478] max-w-[500px]">
        discover our story
        <div className="story-image-frame md:story-image-frame-desktop aspect-[1.33] md:aspect-[1.32] discover-our-story-card-frame h-full md:h-auto">
          <CustomImage
            src="/images/discoverStoryImg.svg"
            alt="image"
            className="aspect-[1.3] md:aspect-[1.32]"
          />
        </div>
      </div>
    </>
  );
}
