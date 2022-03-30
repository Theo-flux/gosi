import React from "react";
import { Discover, Hero, Publications } from "../components/home";

function HomeContainer(){
    return(
        <div>
            <Hero/>
            <Publications/>
            <Discover/>
        </div>
    );
}

export default HomeContainer;

