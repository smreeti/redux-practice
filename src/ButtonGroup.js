import React from "react";
import store from "./store";

const ButtonGroup = ({technologies}) => (
    <div>
        {technologies.map((tech, i) => (
            <button
                data-tech={tech}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
);

const dispatchBtnAction = (event) => {
    const tech = event.target.dataset.tech;
    store.dispatch(setTechnology(tech));
};

const setTechnology = (text) => {
    return {
        type: "SET_TECHNOLOGY",
        text: text
    }
};

export default ButtonGroup;