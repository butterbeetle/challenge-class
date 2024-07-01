"use client";

import { User } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "./supabase.context";

type AuthContextValue = {
  isLoggedIn: boolean;
  isInit: boolean;
  user: User | null;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  isInit: false,
  user: null,
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [isInit, setIsInit] = useState<boolean>(false);
  const [user, setUser] = useState<AuthContextValue["user"]>(null);
  const isLoggedIn = !!user;

  // 서버에 요청 보내고, 요청의 결과값으로 로그인 여부를 계속 판단해줘야함.
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      // console.log(`${event}___`, session);

      if (event === "INITIAL_SESSION") {
        setUser(session?.user || null);
      } else if (event === "SIGNED_IN") {
        setUser(session!.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
      } else if (event === "PASSWORD_RECOVERY") {
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        // handle token refreshed event
      } else if (event === "USER_UPDATED") {
        setUser(session!.user);
      }

      setIsInit(true);
    });
  }, []);

  const value = {
    isInit,
    isLoggedIn,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
