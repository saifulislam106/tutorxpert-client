
import React from 'react';
import type { Metadata } from 'next'
import ContactSection from '@/components/contactPage/contactSection';
 
export const metadata: Metadata={
  title: "TutorXpert | Contact",
  description : "TutorXpert helps you to find Best tutors"
}

const ContactPage = () => {
    return (
        <div className='pt-28'>
            <ContactSection />
            {/* Add any additional sections or components here */}
            {/* Example: <Partnerships /> */}
        </div>
    );
};

export default ContactPage;