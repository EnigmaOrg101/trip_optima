import { create } from 'zustand'

const useSidebarStore = create((set) => ({
  sidebarMode: 'Location',
  setSidebarMode: (mode) => set({ sidebarMode: mode }),

  showProspect: false,
  setShowProspect: (showProspect) => set({ showProspect }),
}))

export default useSidebarStore
