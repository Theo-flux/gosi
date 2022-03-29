import React from "react";

const Button = ({children, onClick}) => {
    return(
        <button onClick={onClick} className={"text-sm text-white rounded-lg py-2 px-4 font-medium font-gilmer bg-primary-600 transition-all duration-300 hover:bg-white hover:text-primary-600 hover:ring-2 hover:ring-primary-600"}>
            {children}
        </button>
    );
}

export { Button };