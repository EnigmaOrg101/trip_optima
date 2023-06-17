import { create } from 'zustand'

const useLocationStore = create((set) => ({
  currentLocation: null,
  setCurrentLocation: (location) => set({ currentLocation: location }),

  desinationLocation: null,
  setDestinationLocation: (location) => set({ destinationLocation: location }),

  destinationAddress: null,
  setDestinationAddress: (address) => set({ destinationAddress: address }),

  travelMode: { api: 'drive', label: 'Drive' },
  setTravelMode: (mode) => set({ travelMode: mode }),

  distance: null,
  setDistance: (distance) => set({ distance: distance }),

  duration: null,
  setDuration: (duration) => set({ duration: duration }),
}))

export default useLocationStore
