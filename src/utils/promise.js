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

export function usePrayerData() {
    const [prayerData, setPrayerData] = useState({});
    const [address, setAddress] = useState('');
    useEffect(() => {
        if(address !== '') {
            prayerDataObj(address, setPrayerData)
        }
    }, [address])
    
    return [prayerData, setAddress];
}
