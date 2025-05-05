
import BannerSection from '@/components/aboutPage/BannerSection';
import MissionSection from '@/components/aboutPage/MissionSection';
import ReviewSection from '@/components/aboutPage/ReviewSection';
import TeamSection from '@/components/aboutPage/TeamSection';
import WorkingSection from '@/components/aboutPage/WorkingSection';
import type { Metadata } from 'next'
 
export const metadata: Metadata={
  title: "TutorXpert | About",
  description : "TutorXpert helps you to find Best tutors"
}

const AboutPage = () => {
    return (
        <div className="mt-22"> 
            <MissionSection/>
            <BannerSection/>
            <WorkingSection/>
            <TeamSection/>
            <ReviewSection/>
        </div>
    );
};

export default AboutPage;