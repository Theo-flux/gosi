import React from "react";

const Title = ({children, className}) => {
    return(
        <h1 className={`text-primary-900 font-medium font-gilmer ${className} text-4xl md:text-5xl`}>    
            {children}
        </h1>
    );
}

const SubTitle = ({children, className}) => {
    return(
        <p className={`font-gilmer ${className} text-sm md:text-lg`}>    
            {children}
        </p>
    );
}

const SmallText = ({ children, className }) => {
    return(
        <small className={`font-gilmer text-neutral-500 font-medium text-sm ${className}`}>
            { children }
        </small>
    );
}

export { 
    Title,
    SubTitle,
    SmallText
}