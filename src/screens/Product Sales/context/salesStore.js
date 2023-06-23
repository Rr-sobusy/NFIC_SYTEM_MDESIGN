import { create } from "zustand";

const useSalesStore = create((set) => ({
  outboundDatas: [],
  refetch: false,
  fetchOutboundData: (datas) =>
    set({
      outboundDatas: datas,
    }),
  handleRefetch: (datas) =>
    set({
      refetch: !datas.refetch,
    }),
}));

export default useSalesStore;
