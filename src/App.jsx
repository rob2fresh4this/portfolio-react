import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
    const [navButton, setNavButton] = useState("");

    return (
        <div>
            <Navbar setNavButton={setNavButton} />
            <Hero navButton={navButton} />
            <About />
            <Skills />
            
        </div>
    );
};

export default App;