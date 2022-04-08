import React from 'react'
import menuFold from "../images/menu-fold.svg";

function MenuFold({className, ...restProps}) {
  return (
    <div {...restProps} className={`${className}`}>   
        <figure>
            <img src={menuFold} alt="menu-fold"/>
        </figure>
    </div>
  )
}

export default MenuFold;
