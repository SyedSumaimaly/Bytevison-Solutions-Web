import Contact from "@/components/section/Contact";
import Contactus from "@/components/section/ContactUs";
import Mapsection from "@/components/section/MapSection";
import Image from "next/image";

export default function contact() {
    return(
        <>
        <Contact heading={'Contact Us'} />
        <Mapsection customPadding="pb-20"/>
        <Contactus/>
    </>
    )
}
