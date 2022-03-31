import React from "react";
import { Discover, Easy, Hero, Publications } from "../components/home";

function HomeContainer(){
    return(
        <div>
            <Hero/>
            <Easy/>
            <Publications/>
            <Discover/>
        </div>
    );
}

export default HomeContainer;

