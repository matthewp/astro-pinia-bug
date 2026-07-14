import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestStore = defineStore('test', () => {
	const arr = ref<string[]>([])
	const obj = ref({
		key: 'value'
	})
	const $reset = () => {
		arr.value = []
		obj.value = {
			key: 'value'
		}
	}
	return {
		$reset,
		arr,
		obj
	}
})
