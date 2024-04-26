import Hero from "@/components/section/Hero";
import Image from "next/image";
import Sectionabout from "@/components/section/SectionAbout";
import ContactUs from "@/components/section/ContactUs";
import Digitalsuccess from "@/components/section/DigitalSuccess";
import Testimonial from "@/components/section/Testimonial";
import Ourprojects from "@/components/section/OurProjects";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import Counter from "@/components/section/Counter";


export default function Home() {
  return (
    <>
      <Hero />
      <Sectionabout />
      <Digitalsuccess/> 
      <WhyChooseUs/>
      <Counter/>
      <Testimonial />
      <Ourprojects />
      <ContactUs/>
    </>
  );
}
