import React from "react";
import { Link } from "react-router-dom";

const Hyperlink = ({children, to, className}) => {
    return(
        <Link to={to} className={`text-sm text-neutral-400 font-medium transition-all duration-75 hover:text-primary-600 focus:text-primary-600 ${className}`}>
            {children}
        </Link>
    );
}

export { Hyperlink }