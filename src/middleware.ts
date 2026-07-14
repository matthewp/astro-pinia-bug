import { defineMiddleware } from 'astro:middleware'
import { createPinia } from 'pinia'
import { runWithPinia } from './store/serverStore'

export const onRequest = defineMiddleware((context, next) => {
	const pinia = createPinia()
	console.log(context.locals.testlocals)
    return runWithPinia(pinia, () => next())
})
