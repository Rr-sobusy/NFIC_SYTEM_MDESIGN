import { create } from "zustand";

const useFgStore = create((set) => ({
  fgDatas: [],
  setFgDatas: (apiDatas) => set({ fgDatas: apiDatas }),
}));

export default useFgStore;
