import React from "react";
import { create } from "zustand";

const messageAlertStoreReset = { isShow: false, msg: "", okBtn: false, cancleBtn: true };
const popuptStoreReset = { title: "", isPopShow: false, msg: "", okBtn: false, cancleBtn: true, evType: false };

// 메세지 얼럿
export const useMessageAlertStore = create((set: any) => ({
  isShow: false,
  msg: "",
  okBtn: false,
  cancleBtn: true,
  callback: function () {},
  setIsShow: (status: boolean) => set((state: any) => ({ ...state, isShow: status })),
  setData: (data: any) => set((state: any) => ({ ...state, ...data })),
  setReset: () => set((state: any) => ({ ...state, ...messageAlertStoreReset })),
}));

// 팝업
export const usePopuptStore = create((set: any) => ({
  title: "",
  isPopShow: false,
  msg: "",
  okBtn: false,
  cancleBtn: true,
  isSubmit: false,
  cencel: function () {},
  ok: function () {},
  setTitle: (title: string) => set((state: any) => ({ ...state, title: title })),
  setIsPopupShow: (status: boolean) => set((state: any) => ({ ...state, setIsPopupShow: status })),
  setPopupData: (data: any) => set((state: any) => ({ ...state, ...data })),
  setReset: () => set((state: any) => ({ ...state, ...popuptStoreReset })),
}));

export const useLodingStore = create((set: any) => ({
  isLoading: false,
  setIsLoading: (status: boolean) =>
    set((state: any) => {
      return { ...state, isLoading: status };
    }),
}));
