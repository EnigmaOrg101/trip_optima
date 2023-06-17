import { create } from 'zustand'

const useMapStore = create((set) => ({
  mapStyle: 'mapbox://styles/mapbox/streets-v11',
  setMapStyle: (style) => set({ mapStyle: style }),

  mapProjection: 'mercator',
  setMapProjection: (projection) => set({ mapProjection: projection }),
}))

export default useMapStore
