import { useEffect, useState } from "react";

export async function prayerDataObj(address, setPrayerData) {
    try {
        const fetchData = await fetch(
            `https://api.aladhan.com/v1/timingsByAddress?address=${address}`
        );
        const prayerTimesData = await fetchData.json();
        setPrayerData(prayerTimesData.data.timings);
    } catch(err) {
        console.log(err.message);
    }
}

export function usePrayerData(setPrayerData) {
    const [prayerData, setPrayerData] = useState({});
    const [address, setAddress] = useState('');
    // I will use useEffect here and when the button 
    useEffect(() => {}, [])
    
    return [prayerData, setAddress];
}
