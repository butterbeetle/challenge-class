"use client";

import Button from "@/components/Button";
import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";

function Header() {
  const { isInit, isLoggedIn, user } = useAuth();

  return (
    <header className="border-b border-b-gray-500">
      <div className="container mx-auto max-w-[1024px] px-5 h-16 flex items-center">
        <Link href={"/"} className="text-xl font-bold">
          중고마켓
        </Link>

        <nav className="ml-20">
          <ul className="flex gap-x-8">
            <li>
              <Link href={"/"}>구입</Link>
            </li>
            <li>
              <Link href={"/deals/create"}>판매</Link>
            </li>
            <li>
              <Link href={"/my/deals"}>내 판매글</Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto">
          {isInit ? (
            isLoggedIn ? (
              <div>로그인 했음</div>
            ) : (
              <ul className="flex gap-x-2.5">
                <li>
                  <Button href="/log-in" size={"sm"}>
                    로그인
                  </Button>
                </li>
                <li>
                  <Button href="/sign-up" size={"sm"} outline>
                    회원가입
                  </Button>
                </li>
              </ul>
            )
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
