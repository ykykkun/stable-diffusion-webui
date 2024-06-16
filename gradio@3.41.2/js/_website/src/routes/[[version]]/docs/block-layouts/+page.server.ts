import Prism from "prismjs";
import "prismjs/components/prism-python";
import { make_slug_processor } from "$lib/utils";

let language = "python";

const COLOR_SETS = [
	["from-green-100", "to-green-50"],
	["from-yellow-100", "to-yellow-50"],
	["from-red-100", "to-red-50"],
	["from-blue-100", "to-blue-50"],
	["from-pink-100", "to-pink-50"],
	["from-purple-100", "to-purple-50"]
];

export async function load({ parent }) {
	const { docs, components, helpers, py_client, routes } = await parent();
	let objs = [
		docs.building.row,
		docs.building.column,
		docs.building.tab,
		docs.building.group,
		docs.building.accordion
	];

	let headers = [
		["Row", "row"],
		["Column", "column"],
		["Tab", "tab"],
		["Group", "group"],
		["Accordion", "accordion"]
	];

	let method_headers: string[][] = [];
	const get_slug = make_slug_processor();

	for (let obj of objs) {
		if (obj.name) {
			obj.slug = get_slug(obj.name);
		}

		if (obj.fns && obj.fns.length) {
			obj.fns.forEach((fn: any) => {
				if (fn.name) fn.slug = get_slug(`${obj.name} ${fn.name}`);
			});
		}

		if ("demos" in obj) {
			obj.demos.forEach((demo: string[]) => {
				demo.push(
					Prism.highlight(demo[1], Prism.languages[language], "python")
				);
			});
		}
		if (obj.example) {
			obj.highlighted_example = Prism.highlight(
				obj.example,
				Prism.languages[language],
				"python"
			);
		}

		if ("fns" in obj && obj.fns.length > 0) {
			for (const fn of obj.fns) {
				if (fn.example) {
					fn.highlighted_example = Prism.highlight(
						fn.example,
						Prism.languages[language],
						"python"
					);
				}
			}
		}
	}
	let mode = "block-layouts";

	let description = `Customize the layout of your Blocks UI with the layout classes below.`;

	return {
		objs,
		mode,
		description,
		components,
		helpers,
		routes,
		py_client,
		COLOR_SETS,
		headers,
		method_headers
	};
}
