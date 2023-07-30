
export async function prayerDataObj(address, setPrayerData) {
    const fetchData = await fetch(
        `https://api.aladhan.com/v1/timingsByAddress/29-07-2023?address=${address}`
    )
    const prayerTimesData = await fetchData.json()
    setPrayerData(prayerTimesData.data.timings)
}