import React from "react";

function Languages(props) {
    return (
        <div className="skill-group">
            <p className="skill-group-label mono">{props.title}</p>
            <div className="card-tags">
                {props.tags.map((tag) => {
                    return (
                        <span className="tag">{tag}</span>
                    );
                })}
            </div>
        </div>
    );
}

export default Languages;