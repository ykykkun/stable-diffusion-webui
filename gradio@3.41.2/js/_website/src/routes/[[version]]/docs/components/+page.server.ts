export async function load({ parent }) {
	const { docs, components, helpers, py_client, routes } = await parent();

	let events = docs.events;
	let events_matrix = docs.events_matrix;
	return {
		components,
		helpers,
		routes,
		py_client,
		events,
		events_matrix
	};
}
