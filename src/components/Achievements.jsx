import React from "react";
import Project from "./Project";
import portfolio from "../info";

function Section() {
    return (
        <div className="section" id="achievements">
            <h2 className="section-title"><span className="mono accent">//</span> Achievements</h2>
            {portfolio.achievements.map((project) => {
                return (
                    <Project title={project.name} description={project.about} tags={project.involved} />
                );
            })}
        </div>
    );
}

export default Section;