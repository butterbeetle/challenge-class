"use client";

import { User } from "@supabase/supabase-js";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isInitialized: boolean;
  isLoggedIn: boolean;
  me: User | null;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  signUp: (email: string, password: string) => void;
};
const initialValue: AuthContextType = {
  isInitialized: false,
  isLoggedIn: false,
  me: null,
  logIn: () => {},
  logOut: () => {},
  signUp: () => {},
};

const AuthContext = createContext<AuthContextType>(initialValue);

export const useAuth = () => useContext(AuthContext);

interface AuthproviderProps {
  initialIsInitialized: boolean;
  initialMe: User | null;
}

export function AuthProvider({
  children,
  initialIsInitialized,
  initialMe,
}: PropsWithChildren<AuthproviderProps>) {
  const [isInitialized, setIsInitialized] =
    useState<AuthContextType["isInitialized"]>(initialIsInitialized);
  const [me, setMe] = useState<AuthContextType["me"]>(initialMe);
  const isLoggedIn = !!me;

  const logIn: AuthContextType["logIn"] = async (email, password) => {
    if (me) return alert("이미 로그인 함");
    if (!email || !password) return alert("이메일, 비밀번호 모두 채워 주세요.");

    const data = { email, password };

    const response = await fetch("http://localhost:3000/api/auth/log-in", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const loggedInuser = await response.json();

    setMe(loggedInuser);
  };

  const logOut: AuthContextType["logOut"] = async () => {
    if (!me) return alert("로그인 먼저 해");

    await fetch("http://localhost:3000/api/auth/log-out", { method: "DELETE" });
    setMe(null);
  };

  const signUp: AuthContextType["signUp"] = async (email, password) => {
    if (me) return alert("이미 로그인 함");
    if (!email || !password) return alert("이메일, 비밀번호 모두 채워 주세요.");

    const data = { email, password };

    const response = await fetch("http://localhost:3000/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const loggedInuser = await response.json();

    setMe(loggedInuser);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me").then(async (response) => {
      if (response.status === 200) {
        const {
          data: { user },
        } = await response.json();
        setMe(user);
      }

      setIsInitialized(true);
    });
  }, []);

  const value: AuthContextType = {
    isInitialized,
    isLoggedIn,
    me,
    logIn,
    logOut,
    signUp,
  };

  // if (!isInitialized) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
