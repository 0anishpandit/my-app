import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isCollapsed: false,
  toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
