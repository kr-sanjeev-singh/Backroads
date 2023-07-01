import About from "./components/About";
import Footers from "./components/Footers";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Tours />
            <Footers />
        </>
    );
}

export default App;
