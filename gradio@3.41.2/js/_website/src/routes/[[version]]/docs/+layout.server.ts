import { redirect } from "@sveltejs/kit";
import version from "$lib/json/version.json";
export const prerender = true;

const DOCS_BUCKET = "https://gradio-docs-json.s3.us-west-2.amazonaws.com";
const VERSION = version.version;

async function load_release_docs(
	version: string
): Promise<typeof import("$lib/json/docs.json")> {
	let docs_json = await fetch(`${DOCS_BUCKET}/${version}/docs.json`);
	return await docs_json.json();
}

async function load_main_docs(): Promise<typeof import("$lib/json/docs.json")> {
	return await import("$lib/json/docs.json");
}

export async function load({ params, url }) {
	if (params?.version === VERSION) {
		throw redirect(302, url.href.replace(`/${params.version}`, ""));
	}
	let docs_json =
		params?.version === "main"
			? await load_main_docs()
			: await load_release_docs(params.version || VERSION);

	let docs: { [key: string]: any } = docs_json.docs;
	let components = docs_json.docs.components;
	let helpers = docs_json.docs.helpers;
	let routes = docs_json.docs.routes;
	let py_client = docs_json.docs["py-client"];
	let js_client = docs_json.js_client;

	return {
		docs,
		components,
		helpers,
		routes,
		py_client,
		js_client
	};
}
