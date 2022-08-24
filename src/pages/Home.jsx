import About from '../components/About';
import AllInOne from '../components/AllInOne';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Support from '../components/Support'


export default function Home() {
    return (<>
        <Navbar />
        <Hero />
        <About />
        <AllInOne />
        <Support />
          </>
    );
}