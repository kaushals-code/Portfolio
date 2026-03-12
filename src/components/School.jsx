import React from "react";

function School(props) {
    return (
        <div class="card">
            <div class="card-header">
                <div>
                    <p class="card-title">{props.title}</p>
                    <p class="card-sub">{props.description}</p>
                </div>
                <span class="badge">{props.years}</span>
            </div>
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

export default School;