import Hero from "@/components/section/Hero";
import Image from "next/image";
import Sectionabout from "@/components/section/Section-about";
import ContactUs from "@/components/section/contact-us";
import Digitalsuccess from "@/components/section/digital-success";
import Testimonial from "@/components/section/testimonial";
import Ourprojects from "@/components/section/our-projects";
import Whychooseus from "@/components/section/why-choose-us";
import Counter from "@/components/section/counter";


export default function Home() {
  return (
    <>
      <Hero />
      <Sectionabout />
      <Digitalsuccess/> 
      <Whychooseus/>
      <Counter/>
      <Testimonial />
      <Ourprojects />
      <ContactUs/>
      

    </>
  );
}
