import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromptBox from "@/components/PromptBox";
import PromptSuggestions from "@/components/PromptSuggestions";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* AI Prompt Workspace */}
      <PromptBox />

      {/* Popular AI Tasks */}
      <PromptSuggestions />

      {/* Features */}
      <FeatureCards />

      {/* Footer */}
      <Footer />
    </main>
  );
}