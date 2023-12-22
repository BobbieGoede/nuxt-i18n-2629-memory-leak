import { defineStore } from "pinia";

const useFooStore = defineStore("foo", {
	state: () => ({
		data: {
			foo: [],
		},
		chairData: undefined as undefined | { name: string },
	}),
	actions: {
		async loadData() {
			await new Promise((resolve) => setTimeout(resolve, 10));
			const res = await $fetch<{ name: string }>("/api/chair");
			this.chairData = res;
		},
	},
});

export default useFooStore;
