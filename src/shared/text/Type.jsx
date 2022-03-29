import React from "react";

const Title = ({children, className}) => {
    return(
        <h1 className={`text-primary-900 font-medium font-gilmer ${className} text-3xl md:text-5xl`}>    
            {children}
        </h1>
    );
}

const SubTitle = ({children, className}) => {
    return(
        <p className={`font-gilmer ${className} md:text-lg`}>    
            {children}
        </p>
    );
}

export { 
    Title,
    SubTitle 
}