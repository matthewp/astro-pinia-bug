import { FetchState, astro } from 'astro/fetch';

export default {
	async fetch(request: Request): Promise<Response> {
		const state = new FetchState(request);

		state.locals.testlocals = 'Hello Bug';
		if(request.url.includes('crutch')) {
			state.renderOptions.locals = state.locals;
		}
		return astro(state);
	},
};
