declare module "global-jsdom" {
	import { ConstructorOptions } from "jsdom";

	function globalJsdom(html?: string, options?: ConstructorOptions): () => void;

	export = globalJsdom;
}

declare var $jsdom: import('jsdom').JSDOM