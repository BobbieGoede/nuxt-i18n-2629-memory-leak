import { defineStore } from 'pinia';

const useFooStore = defineStore('foo', {
  state: () => ({
    data: {
      foo: [],
    },
  }),
  actions: {
    loadData () {
      return new Promise(resolve => setTimeout(resolve, 10));
    },
  },
});

export default useFooStore;
