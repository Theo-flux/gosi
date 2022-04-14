import React, { useContext } from "react";
import {App} from "../../../context/applicationContext";
import { Pods } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Population({population}) {

    return (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 gap-4">
            <Pods data={population?.toLocaleString()} text="population" />
        </div>
    )
}


export default Population;