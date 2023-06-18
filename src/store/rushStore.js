import { create } from 'zustand'

const useRushStore = create((set) => ({
  rushMode: false,
  setRushMode: (rushMode) => set({ rushMode }),

  rushRadius: 5000,
  setRushRadius: (rushRadius) => set({ rushRadius }),

  rushParams: null,
  setRushParams: (rushParams) => set({ rushParams }),

  rushType: 'short',
  setRushType: (rushType) => set({ rushType }),

  alertMode: false,
  setAlertMode: (alertMode) => set({ alertMode }),
}))

export default useRushStore
