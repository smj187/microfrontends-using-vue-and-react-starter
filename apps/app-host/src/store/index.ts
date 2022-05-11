import { defineStore } from "pinia"

export const useAppStore = defineStore("appStore", {
  state: () => ({ counter: 0 }),
  getters: {},
  actions: {
    add() {
      this.counter++
    },
  },
})
