import { create } from 'zustand'

const useMarkerStore = create((set) => ({
  marker: null,
  setMarker: (marker) => set({ marker: marker }),

  searchMarker: null,
  setSearchMarker: (marker) => set({ searchMarker: marker }),
}))

export default useMarkerStore
