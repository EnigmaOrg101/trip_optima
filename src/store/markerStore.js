import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useMarkerStore = create((set) => ({
  marker: null,
  setMarker: (marker) => set({ marker: marker }),
}))

export default create(
  devtools(persist(useMarkerStore, { name: 'marker-store' }))
)
