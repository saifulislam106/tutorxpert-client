
import FAQ from '@/components/faqPage/FAQ';
import type { Metadata } from 'next'
 
export const metadata: Metadata={
  title: "TutorLink | FAQ",
  description : "TutorLink helps you to find Best tutors"
}

const FAQPage = () => {
    return (
        <div className = 'pt-32'>
            <FAQ/>
        </div>
    );
};

export default FAQPage;