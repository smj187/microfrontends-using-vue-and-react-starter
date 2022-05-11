import { defineStore } from "pinia"

type State = {
  isAsideOpen: boolean
}

export const useShellStore = defineStore("shell-store", {
  state: (): State => ({ isAsideOpen: false }),
  getters: {},
  actions: {
    toggleAsideOpen() {
      this.isAsideOpen = !this.isAsideOpen
    },
  },
})
