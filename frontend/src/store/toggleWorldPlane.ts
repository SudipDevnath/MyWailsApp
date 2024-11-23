import { create } from 'zustand'

interface toggleWorldPlane {
    viewXY: boolean,
    viewYZ: boolean,
    viewZX: boolean,
    toggleXY: () => void,
    toggleYZ: () => void,
    toggleZX: () => void,
}

export const useToggleWorldPlaneStore = create<toggleWorldPlane>((set) => ({
    viewXY: true,
    viewYZ: true,
    viewZX: true,
    toggleXY: () => set((state) => ({ viewXY: !state.viewXY })),
    toggleYZ: () => set((state) => ({ viewYZ: !state.viewYZ })),
    toggleZX: () => set((state) => ({ viewZX: !state.viewZX })),
}))