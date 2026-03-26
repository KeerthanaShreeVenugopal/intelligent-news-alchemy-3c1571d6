import Navbar from "@/components/Navbar";
import StoryArcSection from "@/components/StoryArcSection";
import ArticleTabs from "@/components/ArticleTabs";

const StoryTrackerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* <ArticleTabs /> */}
      <div className="pt-20">
        <ArticleTabs />
      </div>

      <StoryArcSection />

    </div>
  );
};

export default StoryTrackerPage;