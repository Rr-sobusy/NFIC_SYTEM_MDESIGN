import { create } from "zustand";

const useFgStore = create((set) => ({
  fgDatas: [],
  refetch: false,
  setFgDatas: (apiDatas) => set({ fgDatas: apiDatas }),
  handleRefetch: () =>
    set((state) => ({
      refetch: !state.refetch,
    })),
}));

export default useFgStore;
