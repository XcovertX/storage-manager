import { create } from 'zustand'

const useTenantInformation = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useTenantInformation