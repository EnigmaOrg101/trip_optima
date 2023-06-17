import { create } from 'zustand'

const useSidebarStore = create((set) => ({
  sidebarMode: 'Location',
  setSidebarMode: (mode) => set({ sidebarMode: mode }),
}))

export default useSidebarStore
