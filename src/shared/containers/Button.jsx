import React from "react";

const Button = ({children, className, ...restProps}) => {
    return(
        <button {...restProps} className={`outline-0 text-sm text-white rounded-lg py-2 px-4 md:py-4 md:px-8 font-medium font-gilmer bg-primary-600 transition-all duration-300 hover:bg-white hover:text-primary-600 hover:ring-2 hover:ring-primary-600 ${className}`}>
            {children}
        </button>
    );
}

const ButtonWithIcon = ({children, className, ...restProps}) => {
    return(
        <button {...restProps} className={`outline-0 flex justify-center items-center text-sm font-semibold text-primary-600 rounded-lg py-2 px-4 md:py-4 md:px-8 font-gilmer bg-primary-100 transition-all duration-300 hover:bg-white hover:ring-2 hover:ring-primary-600 ${className}`}>
            {children}
        </button>
    );
}

export { 
    Button,
    ButtonWithIcon
 };