import create from "zustand"

type Store = {
  counter: number
  add: () => void
  reset: () => void
}

const useStore = create<Store>((set) => ({
  counter: 0,
  add() {
    set((state) => ({ ...state, counter: state.counter + 1 }))
  },
  reset: () => set((state) => ({ ...state, counter: 0 })),
}))

export default useStore
