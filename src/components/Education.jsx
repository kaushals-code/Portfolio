import React from 'react';
import portfolio from '../info';
import School from './School';

function Education() {
    return (
        <section id="education" class="section">
            <h2 class="section-title"><span class="mono accent">//</span> Education</h2>
            {portfolio.education.map((school) => {
                return (
                    <School title={school.name} description={school.about} years={school.years} tags={school.learnt} />
                );
            })}
        </section>
    );
}

export default Education;