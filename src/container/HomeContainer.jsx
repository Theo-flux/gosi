import React from "react";
import { Discover, Easy, Hero, Publications, Story } from "../components/home";

function HomeContainer(){
    return(
        <div>
            <Hero/>
            <Story/>
            <Easy/>
            <Publications/>
            <Discover/>
        </div>
    );
}

export default HomeContainer;

