import React, { useContext } from "react";
import {App} from "../../../context/applicationContext";
import { Pods } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Language({language}) {

    return (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 gap-4">
            <Pods data={language} text="most spoken language" />
        </div>
    )
}

export default Language;