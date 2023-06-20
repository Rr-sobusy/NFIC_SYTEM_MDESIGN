import { create } from "zustand";

const useOutboundDialog = create((set) => ({
  isOpen: false,
  handleClickOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}));

export default useOutboundDialog;
