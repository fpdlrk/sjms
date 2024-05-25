import { create } from "zustand";

const useMessageAlertStore = create((set: any) => ({
  type: "alert",
  isShow: false,
  msg: "",
  confirmHandler: () => {},
  setIsShow: (status: boolean) => set({ isShow: status }),
  setData: (data: any) => set(() => ({ msg: data.msg })),
  setType: (type: string) => set(() => ({ type: type })),
  setOkHandler: (callback: any) => set(() => ({ confirmHandler: callback })),
}));

export default useMessageAlertStore;
