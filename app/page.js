import Hero from "@/components/Hero";
import ProjectVision from "@/components/ProjectVision";
import SystemOverview from "@/components/SystemOverview";
import ModulesGrid from "@/components/ModulesGrid";
import SystemMockup from "@/components/SystemMockup";
import OperationalFlow from "@/components/OperationalFlow";
import CustomSystemSection from "@/components/CustomSystemSection";
import ManagementDashboard from "@/components/ManagementDashboard";
import ImplementationTimeline from "@/components/ImplementationTimeline";
import Investment from "@/components/Investment";
import Scope from "@/components/Scope";
import Faq from "@/components/Faq";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectVision />
      <SystemOverview />
      <ModulesGrid />
      <SystemMockup />
      <OperationalFlow />
      <CustomSystemSection />
      <ManagementDashboard />
      <ImplementationTimeline />
      <Investment />
      <Scope />
      <Faq />
      <FinalCTA />
    </main>
  );
}
