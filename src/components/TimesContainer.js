
export function TimesContainer ({ prayerData }) {
    return (
        <div>
            <ul>
                {
                    Object.keys(prayerData).map((time, index) => {
                        return (
                            <li key={index}>{time}: {prayerData[time]}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}