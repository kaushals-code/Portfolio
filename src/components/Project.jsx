import React from "react";

function Project(props) {
    return (
        <div className="card">
            <div className="card-header">
                <div>
                    <p className="card-title">{props.title}</p>
                    <p className="card-sub">{props.description}</p>
                </div>
            </div>
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

export default Project;