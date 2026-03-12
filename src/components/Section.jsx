import React from "react";
import Project from "./Project";
import portfolio from "../info";

function Section() {
    return (
        <div className="section" id="projects">
            <h2 className="section-title"><span className="mono accent">//</span> Projects</h2>
            {portfolio.projects.map((project) => {
                return (
                    <Project title={project.name} description={project.about} tags={project.involved} />
                );
            })}
        </div>
    );
}

export default Section;