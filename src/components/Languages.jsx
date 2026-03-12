import React from "react";

function Languages(props) {
    return (
        <div class="skill-group">
            <p class="skill-group-label mono">{props.title}</p>
            <div class="card-tags">
                {props.tags.map((tag) => {
                    return (
                        <span class="tag">{tag}</span>
                    );
                })}
            </div>
        </div>
    );
}

export default Languages;