import React, { useState, useEffect } from "react";
import { TimesContainer } from "./TimesContainer";
import { prayerDataObj } from "../utils/promise";
import { InputForms } from "./InputForms";
export function PrayerTimes() {    
    const [prayerData, setAddress] = useState({});

    function submitHandler(address) {
        prayerDataObj(address, setAddress)
    }
    return (
        <div>
            <InputForms submitHandler={submitHandler} />
            <TimesContainer prayerData={prayerData} />
        </div>
    )
}