import DiscoverOurStoryCard from "@/components/DiscoverOurStoryCard";

export default function DiscoverOurStory() {
  return (
    <>
      <div
        id="about_us"
        role="img"
        aria-label={"bg-checks"}
        style={{
          backgroundImage: `url('/images/discoverStoryBg.png')`,
        }}
        className={
          "flex flex-col items-center justify-center bg-cover bg-top aspect-[1.11] md:aspect-[1.83] bg-no-repeat"
        }>
        <div className="flex flex-col gap-[67px] md:gap-[10px] my-20 min-[1024px]:flex-row md:max-w-7xl items-center default-max-width">
          <div className="flex-1">
            <div className="flex justify-start">
              <DiscoverOurStoryCard />
            </div>
          </div>
          <div className="flex-1 flex-col flex about-us-description w-full tracking-wider items-center justify-center">
            <p className="text-justify mx-2 w-[70%] md:text-left md:w-full ">
              At o9 Network, we&apos;re passionate about making every moment
              count. Our innovative solutions are designed to empower our
              clients to achieve their goals quickly and efficiently. With our
              expert team, we create custom CPA, CPL, and CPI offers that
              perfectly match your audience. <br />
              <br />
            </p>
            <p className="text-justify md:text-left mx-2 w-[70%] md:w-full">
              From sweepstakes and dating to mobile subscriptions and antivirus,
              our in-house offers span mainstream and adult services. Join us
              today and seize every opportunity to reach new heights of success
              with o9 Network by your side!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
