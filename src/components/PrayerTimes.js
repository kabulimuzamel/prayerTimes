import { TimesContainer } from "./TimesContainer";
import { usePrayerData } from "../utils/promise";
import { InputForms } from "./InputForms";
export function PrayerTimes() {
	const [prayerData, searchHandler] = usePrayerData();

	return (
		<div>
			<InputForms
				searchHandler={searchHandler}
			/>
			<TimesContainer prayerData={prayerData} />
		</div>
	)
}