import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useLocationStore = create((set) => ({
  location: null,
  setLocation: (location) => set({ location: location }),
}))

export default create(
  devtools(persist(useLocationStore, { name: 'location-store' }))
)
