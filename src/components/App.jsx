import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";
import "../style.css";
import Education from "./Education";
import Achievements from "./Achievements";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <div className="bg-grid"></div>
            <div className="bg-glow"></div>

            <div className="layout">

                {/* NAVBAR */}
                <Navbar />


                {/* Main Content */}
                <div className="main">
                    <Hero />

                    <div className="divider"></div>
                    {/* Skills Section */}
                    <Skills />

                    <div className="divider"></div>
                    {/* Projects Section */}
                    <Section />


                    <div className="divider"></div>
                    {/* Achievements Section */}
                    <Achievements />

                    <div className="divider"></div>
                    {/* Education Section */}
                    <Education />
                    {/* Footer */}
                    <Footer />

                </div>

            </div>
        </div>
    );
}

export default App; 