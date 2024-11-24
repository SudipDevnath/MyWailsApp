import { create } from 'zustand'

interface ToggleWorldPlane {
    viewXY: boolean,
    viewYZ: boolean,
    viewZX: boolean,

    toggleXY: () => void,
    toggleYZ: () => void,
    toggleZX: () => void,
}

const useToggleWorldPlaneStore = create<ToggleWorldPlane>((set) => ({
    viewXY: false,
    viewYZ: false,
    viewZX: false,

    toggleXY: () => set((state) => ({ viewXY: !state.viewXY })),
    toggleYZ: () => set((state) => ({ viewYZ: !state.viewYZ })),
    toggleZX: () => set((state) => ({ viewZX: !state.viewZX })),
}))

// Selectors for state
export const useWorldPlaneViewXY = () => useToggleWorldPlaneStore((state) => state.viewXY)
export const useWorldPlaneViewYZ = () => useToggleWorldPlaneStore((state) => state.viewYZ)
export const useWorldPlaneViewZX = () => useToggleWorldPlaneStore((state) => state.viewZX)

// Selectors for toggler functions
export const useToggleWorldPlaneViewXY = () => useToggleWorldPlaneStore((state) => state.toggleXY)
export const useToggleWorldPlaneViewYZ = () => useToggleWorldPlaneStore((state) => state.toggleYZ)
export const useToggleWorldPlaneViewZX = () => useToggleWorldPlaneStore((state) => state.toggleZX)
