import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLoggedIn: false,
  logIn: () =>
    set(() => ({
      isLoggedIn: true,
    })),
  logOut: () =>
    set(() => ({
      isLoggedIn: false,
    })),
}));

export default useLoginStore;
