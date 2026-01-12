
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Banner2 from "@/components/sections/home4/Banner2"
import Happy from "@/components/sections/home4/Happy"
import Gallery from "@/components/sections/home4/Gallery"
import AboutUs from "@/components/sections/home4/AboutUs"
import Statistics from "@/components/sections/home4/Statistics"
import ProductSlider from "@/components/sections/home4/ProductSlider"
import Animation from "@/components/sections/home4/Animation"

export default function Home() {

    return (
        <>
        <div className="home-three">
            <Layout headerStyle={4} footerStyle={2}>
                <Banner /> 
                <Animation />
                <Banner2 />
                <AboutUs />
                <Happy /> 
                <Statistics />
                <ProductSlider />
                <Gallery />
            </Layout>
        </div>
        </>
    )
}