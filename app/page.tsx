import Hero from './components/Fragments/Hero';
import Featured from './components/Fragments/Featured';
import About from './components/Fragments/About';
import Stats from './components/Fragments/Stats';
import Service from './components/Fragments/Service';
import Portfolio from './components/Fragments/Portfolio';
import Testimonials from './components/Fragments/Testimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <Featured />
            <About />
            <Stats />
            <Service />
            <Portfolio />
            <Testimonials />
        </>
    );
}
