import React from "react";

const HelloWorld = (props) => {

    const {tech} = props;
    return (
        <div> Hello World {tech}</div>
    )
};

export default HelloWorld;