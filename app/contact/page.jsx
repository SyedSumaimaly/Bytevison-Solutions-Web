import Contact from "@/components/section/contact";
import Contactus from "@/components/section/contact-us";
import Mapsection from "@/components/section/map-section";
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
