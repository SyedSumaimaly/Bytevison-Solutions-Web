import Hero from "@/components/section/Hero";
import Image from "next/image";
import Sectionabout from "@/components/section/Section-about";
import ContactUs from "@/components/section/contact-us";
import Digitalsuccess from "@/components/section/digital-success";
import Testimonial from "@/components/section/testimonial";


export default function Home() {
  return (
    <>
      <Hero />
      <Sectionabout />
      <Digitalsuccess/> 
      <Testimonial />
      <ContactUs/>

    </>
  );
}
