import ActionBanner from "@/components/homePage/ActionBanner";
import Banner from "@/components/homePage/Banner";
import BenefitsSection from "@/components/homePage/BenefitsSection"
import Partnerships from "@/components/homePage/PartnarshipSection";

import Slider from "@/components/homePage/Slider"
import TutorSectionWrapper from "@/components/homePage/TutorSectionWrapper";
import type { Metadata } from 'next'
 
export const metadata: Metadata={
  title: "TutorXpert | Home",
  description : "TutorXpert helps you to find Best tutors"
}


export default function HomePage() {
  return (
    <div className="mt-12">
      
      <Banner/>
      <BenefitsSection/>
      <Slider/>
      <TutorSectionWrapper/>
      <ActionBanner/>
      <Partnerships/>

    </div>
    )
}
