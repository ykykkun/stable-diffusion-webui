/// <reference types="vite/client" />

import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

const langs = import.meta.globEager("./lang/*.json");

type LangsRecord = Record<
	string,
	{
		[key: string]: any;
	}
>;

export function process_langs(): LangsRecord {
	let _langs: LangsRecord = {};

	for (const lang in langs) {
		const code = (lang.split("/").pop() as string).split(".").shift() as string;
		_langs[code] = (langs[lang] as Record<string, any>).default;
	}

	return _langs;
}

const processed_langs = process_langs();

for (const lang in processed_langs) {
	addMessages(lang, processed_langs[lang]);
}

export function setupi18n(): void {
	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator()
	});
}
