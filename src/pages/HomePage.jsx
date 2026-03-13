import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Capabilities from '../components/Sections/Capabilities'
import Process from '../components/Sections/Process'
import ServicesGrid from '../components/Sections/ServicesGrid'
import CustomProject from '../components/Sections/CustomProject'
import FinalCTAs from '../components/Sections/FinalCTAs'

function HomePage() {
    return (
        <main className="h-full lg:h-screen overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth bg-brand-bg">
            <div className="presentation-slide"><Hero /></div>
            <div className="presentation-slide"><About /></div>
            <div className="presentation-slide"><Capabilities /></div>
            <div className="presentation-slide"><Process /></div>
            <div className="presentation-slide"><ServicesGrid /></div>
            <div className="presentation-slide"><CustomProject /></div>
            <div className="presentation-slide"><FinalCTAs /></div>
        </main>
    )
}

export default HomePage
