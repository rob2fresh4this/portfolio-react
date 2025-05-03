import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
    const [navButton, setNavButton] = useState("");

    return (
        <div>
            <Navbar setNavButton={setNavButton} />
            <Hero navButton={navButton} />
            <About />
            <hr />
            <Skills />
            <Footer />
        </div>
    );
};

export default App;