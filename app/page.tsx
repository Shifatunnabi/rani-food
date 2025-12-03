
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Banner2 from "@/components/sections/home4/Banner2"
import Animated from "@/components/sections/home4/Animated"
import Menu from "@/components/sections/home4/Menu"
import Testimonial from "@/components/sections/home4/Testimonial"
import Choose from "@/components/sections/home4/Choose"
import Booking from "@/components/sections/home4/Booking"
import Instagram from "@/components/sections/home4/Instagram"
import Happy from "@/components/sections/home4/Happy"
import Chefs from "@/components/sections/home4/Chefs"
import Intro from "@/components/sections/home4/Intro"
import Gallery from "@/components/sections/home4/Gallery"
export default function Home() {

    return (
        <>
        <div className="home-three">
            <Layout headerStyle={4} footerStyle={2}>
                <Banner /> 
                <Animated /> 
                <Banner2 />  
                <Menu /> 
                <Happy /> 
                <Choose /> 
                {/* <Booking /> */}
                <Chefs />
                {/* <Intro /> */}
                {/* <Testimonial /> */}
                <Gallery />
                {/* <Instagram /> */}
                
            </Layout>
        </div>
        </>
    )
}