import { useEffect, useState } from "react";

//beerId -> sagt am für welches Bier wir diese hook verwenden
const useLocalStorage = () => {
	//variable: der key im localeStorage wird mit 'likedBeers' definiert
	const localStorageKey = "likedBeers";
	//useState
	const [likedBeers, setLikedBeers] = useState<string[]>(() => {
		//Variable anlegen um den initialenWErt zu bestimmen
		let currentValue: string[] = [];

		//hier den localStorage auslesen anhand eines keys, defaultValue falls es den key nicht gibt in dem eintrag
		//currentValue ist der ausgelesene Wert aus dem localstorage oder der default
		try {
			currentValue = JSON.parse(localStorage.getItem(localStorageKey) || "");
		} catch (error) {
			console.error(error, "hier ist was schief gelaufen");
		}
		return currentValue;
	});

	useEffect(() => {
		//hier kommt Code dür die Speicherung in den LocalStorage hin
		localStorage.setItem(localStorageKey, JSON.stringify(likedBeers));
		//Dependencies anpassen:
		//immer ausführen wenn sich der Valu in dieser Hook ändert
		//alles was sich anders kommt hier rein.
	}, [likedBeers]);

	const onLike = (likedId: string | undefined) => {
		if (likedId === undefined) {
			return;
		}
		if (likedBeers.includes(likedId)) {
			//dann entliken
			//previous ist ein string array
			//wir wollen alle biere behalten die ungleich der ausgewählten ID sind(überprüft über entryId)
			setLikedBeers((previous) =>
				previous.filter((entryId) => entryId !== likedId)
			);
			//hinzufügen in den localStorage
		} else {
			setLikedBeers((previous) => [...previous, likedId]);
		}
	};

	//likedBeers wird auch mit nach draußen frei gegeben, muss aber extern nicht angeben werden.
	const isLiked = (beerId: string | undefined) => {
		if (beerId === undefined) {
			return false;
		}
		return likedBeers.includes(beerId);
	};
	return { isLiked, onLike, likedBeers };
};

export default useLocalStorage;
