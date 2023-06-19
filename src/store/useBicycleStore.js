import { create } from 'zustand'

const useBicycleStore = create((set) => ({
  selectedBicycle: {},
  setSelectedBicycle: (newSelected) => set(() => ({ selectedBicycle: newSelected })),
}))

export default useBicycleStore;