import React from "react";
import { Discover, Easy, Hero, Publications, Story } from "../components/home";
import {Layout} from "../shared";

function HomeContainer(){
    return(
        <Layout>
            <Hero/>
            <Story/>
            <Easy/>
            <Publications/>
            <Discover/>
        </Layout>
    );
}

export default HomeContainer;

