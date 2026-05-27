import React from "react";

function Project(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
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
        </a>
    );
}

export default Project;