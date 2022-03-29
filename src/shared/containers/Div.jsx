import React from "react";

const Div = ({children, className}) => {
    return(
        <div className = {`mx-auto max-w-5xl ${className}`}>
            { children }
        </div>
    )
}

export { Div };
