import { create } from 'zustand'

const useRushStore = create((set) => ({
  rushMode: false,
  setRushMode: (rushMode) => set({ rushMode }),

  rushRadius: 1000,
  setRushRadius: (rushRadius) => set({ rushRadius }),

  rushParams: null,
  setRushParams: (rushParams) => set({ rushParams }),
}))

export default useRushStore
