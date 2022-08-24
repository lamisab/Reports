import About from '../components/About';
import AllInOne from '../components/AllInOne';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing';
import Login from '../components/Login';
import Support from '../components/Support'


export default function Home() {
    return (<>
        <Navbar />
        <Hero />
        <About />
        <Support />
        <Login />
        <AllInOne />
        <Pricing />
        <Footer /> 
          </>
    );
}