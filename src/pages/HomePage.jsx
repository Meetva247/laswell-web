import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Capabilities from '../components/Sections/Capabilities'
import Process from '../components/Sections/Process'
import CustomProject from '../components/Sections/CustomProject'
import FinalCTAs from '../components/Sections/FinalCTAs'

function HomePage() {
    return (
        <div className="bg-brand-bg">
            <div className="presentation-slide"><Hero /></div>
            <div className="presentation-slide"><About /></div>
            <div className="presentation-slide"><Capabilities /></div>
            <div className="presentation-slide"><Process /></div>
            <div className="presentation-slide"><CustomProject /></div>
            <div className="presentation-slide"><FinalCTAs /></div>
        </div>
    )
}

export default HomePage
