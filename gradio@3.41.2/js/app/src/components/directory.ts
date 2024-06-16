export const component_map = {
	accordion: {
		static: () => import("@gradio/accordion/static")
	},
	annotatedimage: {
		static: () => import("@gradio/annotatedimage/static")
	},
	audio: {
		static: () => import("@gradio/audio/static"),
		interactive: () => import("@gradio/audio/interactive")
	},
	box: {
		static: () => import("@gradio/box/static")
	},
	button: {
		static: () => import("@gradio/button/static")
	},
	chatbot: {
		static: () => import("@gradio/chatbot/static")
	},
	checkbox: {
		static: () => import("@gradio/checkbox/static"),
		interactive: () => import("@gradio/checkbox/interactive")
	},
	checkboxgroup: {
		static: () => import("@gradio/checkboxgroup/static"),
		interactive: () => import("@gradio/checkboxgroup/interactive")
	},
	code: {
		static: () => import("@gradio/code/static"),
		interactive: () => import("@gradio/code/interactive")
	},
	colorpicker: {
		static: () => import("@gradio/colorpicker/static"),
		interactive: () => import("@gradio/colorpicker/interactive")
	},
	column: {
		static: () => import("@gradio/column/static")
	},
	dataframe: {
		static: () => import("@gradio/dataframe/static"),
		interactive: () => import("@gradio/dataframe/interactive")
	},
	dataset: {
		static: () => import("./Dataset")
	},
	dropdown: {
		static: () => import("@gradio/dropdown/static"),
		interactive: () => import("@gradio/dropdown/interactive")
	},
	file: {
		static: () => import("@gradio/file/static"),
		interactive: () => import("@gradio/file/interactive")
	},
	form: {
		static: () => import("@gradio/form/static")
	},
	gallery: {
		static: () => import("@gradio/gallery/static")
	},
	group: {
		static: () => import("@gradio/group/static")
	},
	highlightedtext: {
		static: () => import("@gradio/highlightedtext/static")
	},
	html: {
		static: () => import("@gradio/html/static")
	},
	image: {
		static: () => import("@gradio/image/static"),
		interactive: () => import("@gradio/image/interactive")
	},
	interpretation: {
		static: () => import("./Interpretation"),
		interactive: () => import("./Interpretation")
	},
	json: {
		static: () => import("@gradio/json/static")
	},
	label: {
		static: () => import("@gradio/label/static")
	},
	markdown: {
		static: () => import("@gradio/markdown/static")
	},
	model3d: {
		static: () => import("@gradio/model3d/static"),
		interactive: () => import("@gradio/model3d/interactive")
	},
	number: {
		static: () => import("@gradio/number/static"),
		interactive: () => import("@gradio/number/interactive")
	},
	plot: {
		static: () => import("@gradio/plot/static")
	},
	radio: {
		static: () => import("@gradio/radio/static"),
		interactive: () => import("@gradio/radio/interactive")
	},
	row: {
		static: () => import("@gradio/row/static")
	},
	slider: {
		static: () => import("@gradio/slider/static"),
		interactive: () => import("@gradio/slider/interactive")
	},
	state: {
		static: () => import("./State")
	},
	statustracker: {
		static: () => import("@gradio/statustracker/static")
	},
	tabs: {
		static: () => import("@gradio/tabs/static")
	},
	tabitem: {
		static: () => import("@gradio/tabitem/static")
	},
	textbox: {
		static: () => import("@gradio/textbox/static"),
		interactive: () => import("@gradio/textbox/interactive")
	},
	timeseries: {
		static: () => import("@gradio/timeseries/static"),
		interactive: () => import("@gradio/timeseries/interactive")
	},
	uploadbutton: {
		static: () => import("@gradio/uploadbutton/static"),
		interactive: () => import("@gradio/uploadbutton/interactive")
	},
	video: {
		static: () => import("@gradio/video/static"),
		interactive: () => import("@gradio/video/interactive")
	}
};
