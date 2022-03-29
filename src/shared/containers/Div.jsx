import React from "react";

const Div = ({children, className, ...restProps}) => {
    return(
        <div {...restProps} className = {`mx-auto max-w-5xl ${className}`}>
            { children }
        </div>
    )
}

export { Div };
