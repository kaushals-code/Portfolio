import React from "react";

function Hero() {
    return (
        <section className="hero">
            <p className="hero-tag mono">CSE Undergrad · Hyderabad</p>
            <h1 className="hero-name">Kaushal<br />Singh Thakur</h1>
            <p className="hero-desc">DEV - DSA - Repeat<br /> CS undergraduate at <em><b>Osmania University</b></em> with a strong interest in problem solving, algorithms, and software development. I enjoy building practical applications and improving my skills through real-world projects, always aiming to create efficient, meaningful solutions.</p>
            <div className="hero-cta">
                <a href="https://github.com/kaushals-code" target="_blank" className="btn btn-primary">View GitHub</a>
            </div>
        </section>
    );
}

export default Hero;
// DSA - DEV - Repeat
// if(true): DSA -> DEV
// else: DEV -> DSA