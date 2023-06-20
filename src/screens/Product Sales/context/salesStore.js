import { create } from "zustand";

const useSalesStore = create((set) => ({
  outboundDatas: [],
  fetchOutboundData: (datas) =>
    set({
      outboundDatas: datas,
    }),
}));

export default useSalesStore;
