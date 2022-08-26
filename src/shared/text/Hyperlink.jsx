import React from "react";
import { NavLink } from "react-router-dom";

const Hyperlink = ({ children, to, className, activeClassName, ...restProps }) => {
  return (
    <NavLink
      {...restProps}
      to={to}
      className={`text-sm text-neutral-400 font-medium transition-all duration-75 hover:text-primary-600 focus:text-primary-600 active:text-primary-600 ${className}`}
      activeclassname={activeClassName}
    >
      {children}
    </NavLink>
  );
};

export { Hyperlink };
