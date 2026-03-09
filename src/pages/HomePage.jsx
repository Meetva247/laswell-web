import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Capabilities from '../components/Sections/Capabilities'
import Process from '../components/Sections/Process'
import ServicesGrid from '../components/Sections/ServicesGrid'
import CustomProject from '../components/Sections/CustomProject'
import FinalCTAs from '../components/Sections/FinalCTAs'

function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Capabilities />
            <Process />
            <ServicesGrid />
            <CustomProject />
            <FinalCTAs />
        </>
    )
}

export default HomePage
