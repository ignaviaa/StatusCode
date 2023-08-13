import { create } from 'zustand';

export const useDataStore = create((set, get) => ({
    ngoName: "",
    updateNgoName: (newNgoName) => {
        const newNgoNameState = get().ngoName
        set({ ngoName: newNgoName + newNgoNameState })
    }
}));
