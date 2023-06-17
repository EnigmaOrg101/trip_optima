import { create } from 'zustand'

const useRushStore = create((set) => ({
  rushMode: false,
  setRushMode: (rushMode) => set({ rushMode }),

  rushRadius: 30000,
  setRushRadius: (rushRadius) => set({ rushRadius }),
}))

export default useRushStore
