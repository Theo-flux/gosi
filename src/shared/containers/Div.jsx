import React from "react";

const Div = ({children, className, ...restProps}) => {
    return(
        <div {...restProps} className = {`mx-auto w-11/12 max-w-5xl ${className}`}>
            { children }
        </div>
    )
}

export { Div };
