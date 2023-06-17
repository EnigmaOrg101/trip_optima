import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useSidebarStore = create((set) => ({
  sidebarMode: null,
  setSidebarMode: (mode) => set({ sidebarMode: mode }),
}))

export default create(
  devtools(persist(useSidebarStore, { name: 'sidebar-store' }))
)
