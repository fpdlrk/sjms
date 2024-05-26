import { create } from "zustand";

const messageAlertStoreReset = { isShow: false, msg: "", okBtn: false, cancleBtn: true };

export const useMessageAlertStore = create((set: any) => ({
  isShow: false,
  msg: "",
  okBtn: false,
  cancleBtn: true,
  callback: function () {},
  setIsShow: (status: boolean) => set({ isShow: status }),
  setData: (data: any) => set((state: any) => ({ ...state, ...data })),
  setReset: () => set((state: any) => ({ ...state, ...messageAlertStoreReset })),
}));
