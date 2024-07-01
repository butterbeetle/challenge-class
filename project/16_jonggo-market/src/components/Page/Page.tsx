import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
  isTitleHidden?: boolean;
  width?: "sm" | "md" | "full";
}

const pageVariants = cva("container mx-auto max-w-[1024px] px-5 py-20", {
  variants: {
    width: {
      sm: "max-w-[620px]",
      md: "max-w-[1024px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    width: "md",
  },
});

// Page따로 폴더만들어서 한 이유? -> Page에 필요한게 여러개(hooks,stories 등)있을 수 있으니까 모아놓으려고
function Page({
  title,
  isTitleHidden = false,
  width,
  children,
}: PropsWithChildren<PageProps>) {
  return (
    <main className={pageVariants({ width })}>
      <h1
        className={`text-3xl font-bold mb-12 ${isTitleHidden ? "hidden" : ""}`}
      >
        {title}
      </h1>
      {children}
    </main>
  );
}

export default Page;
