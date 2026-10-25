import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import Methodology from '@/components/Methodology';
import PipelineComparison from '@/components/PipelineComparison';
import InteractiveSimulator from '@/components/InteractiveSimulator';
import VideoWalkthrough from '@/components/VideoWalkthrough';
import Benchmarks from '@/components/Benchmarks';
import ProjectProgress from '@/components/ProjectProgress';
import TeamSection from '@/components/TeamSection';
import DeveloperPortal from '@/components/DeveloperPortal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-[#f8fafc]">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Methodology />
      <PipelineComparison />
      <InteractiveSimulator />
      <VideoWalkthrough />
      <Benchmarks />
      <ProjectProgress />
      <TeamSection />
      <DeveloperPortal />
      <Footer />
    </main>
  );
}
