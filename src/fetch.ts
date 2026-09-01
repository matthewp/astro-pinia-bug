import { FetchState, astro } from 'astro/fetch';

export default {
	async fetch(request: Request): Promise<Response> {
		const state = new FetchState(request);
		return astro(state);
	},
};
