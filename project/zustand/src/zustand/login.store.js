import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      logIn: () =>
        set(() => ({
          isLoggedIn: true,
        })),
      logOut: () =>
        set(() => ({
          isLoggedIn: false,
        })),
      // toggleIsLoggedIn:()=>set((prevState)=>({isLoggedIn:!prevState.isLoggedIn}))
      toggleIsLoggedIn: () => {
        const prevState = get();
        set({ isLoggedIn: !prevState.isLoggedIn });
      },
    }),
    {
      name: "login-store",
      storage: createJSONStorage(() => localStorage), // 이 줄 안쓰면 local storage 기본, session에 하고싶으면 sessionStorage로 적음
    }
  )
);

export default useLoginStore;
