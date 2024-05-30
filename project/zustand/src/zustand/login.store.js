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
      toggleIsLoggedIn: async () => {
        const prevState = get();
        const currentIsLoggedIn = prevState.isLoggedIn;
        // 아래 코드, 즉 set하기 전
        // 어딘가 통신을 하고 데이터를 가져와야 한다 등의 일이 있을 수 있음
        await fetch(`/${currentIsLoggedIn}`);
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
