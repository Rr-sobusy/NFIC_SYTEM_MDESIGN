import { create } from "zustand";

const useSalesStore = create((set) => ({
  outboundDatas: [],
  refetch: false,
  fetchOutboundData: (datas) =>
    set({
      outboundDatas: datas,
    }),
  handleRefetch: () =>
    set((state) => ({
      refetch: !state.refetch,
    })),
}));

export default useSalesStore;
