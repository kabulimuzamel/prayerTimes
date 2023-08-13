import { TimesContainer } from "./TimesContainer";
import { usePrayerData } from "../utils/promise";
import { InputForms } from "./InputForms";
export function PrayerTimes() {
	const [prayerData, setAddress] = usePrayerData();

	return (
		<div>
			<InputForms
				setAddress={setAddress}
			/>
			<TimesContainer prayerData={prayerData} />
		</div>
	)
}