import React from "react";
import portfolio from "../info";
import Languages from "./Languages";

function Skills() {
    return (
        <section id="skills" class="section">
            <h2 class="section-title"><span class="mono accent">//</span> Skills</h2>
            <div class="skills-grid">
                <Languages title={"Web Dev"} tags={portfolio.skills.webDev} />
                <Languages title={"Languages"} tags={portfolio.skills.languages} />
                <Languages title={"Databases"} tags={portfolio.skills.databases} />
                <Languages title={"Miscellaneous"} tags={portfolio.skills.miscellaneous} />
            </div>
        </section>
    );
}

export default Skills;