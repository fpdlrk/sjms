import { create } from "zustand";

export const useMessageAlertStore = create((set: any) => ({
  type: "alert",
  isShow: false,
  msg: "",
  okBtn: false,
  setIsShow: (status: boolean) => set({ isShow: status }),
  setMsg: (msg: any) => set(() => ({ msg: msg })),
  setType: (type: string) => set(() => ({ type: type })),
  setOkHandler: (callback: any) => set(() => ({ confirmHandler: callback })),
}));

export const useComfirmStore = create((set: any) => ({
  isShow: false,
  msg: "",
  confirmHandler: () => {},
  setIsShow: (status: boolean) => set({ isShow: status }),
  setMsg: (msg: any) => set(() => ({ msg: msg })),
  setType: (type: string) => set(() => ({ type: type })),
  setOkHandler: (callback: any) => set(() => ({ confirmHandler: callback })),
}));
