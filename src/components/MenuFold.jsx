import React from 'react'
import menuFold from "../images/menu-fold.svg";
import menuUnFold from "../images/menu-unfold.svg";

function MenuFold({className, showChart, ...restProps}) {
  return (
    <div {...restProps} className={`${className}`}>   
        <figure>
            <img src={showChart ? menuFold:menuUnFold} alt="menu-fold"/>
        </figure>
    </div>
  )
}

export default MenuFold;
