import { create } from "zustand";

const dialogStore = create((set) => ({
  isOpen: false,
  handleClickOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}));

export default dialogStore;
