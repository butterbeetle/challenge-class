import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

const buttonVariant = cva(
  "border rounded font-semibold hover:brightness-90 active:brightness-75 transition",
  {
    variants: {
      intent: {
        primary: " border-sky-500 ",
        secondary: " border-slate-500 ",
        danger: " border-red-500 ",
      },
      size: {
        sm: "px-3 py-1 text-[13px]",
        md: "px-4 py-1.5 text-[15px]",
        lg: "px-5 py-2 text-[17px]",
      },
      variant: {
        outline: "bg-white",
        contained: "text-white",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      variant: "contained",
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "contained",
        className: "bg-sky-500",
      },
      {
        intent: "primary",
        variant: "outline",
        className: "text-sky-500",
      },
      {
        intent: "secondary",
        variant: "contained",
        className: "bg-slate-500",
      },
      {
        intent: "secondary",
        variant: "outline",
        className: "text-slate-500",
      },
      {
        intent: "danger",
        variant: "contained",
        className: "bg-red-500",
      },
      {
        intent: "danger",
        variant: "outline",
        className: "text-red-500",
      },
    ],
  }
);

type ButtonVariant = VariantProps<typeof buttonVariant>;

// 위 아래 완전 똑같은 거
// type ButtonProps = {} & ButtonVariant & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type ButtonProps = {} & ButtonVariant & ComponentProps<"button">;

function Button({
  intent,
  size,
  variant,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={buttonVariant({ intent, size, variant })} {...props}>
      {children}
    </button>
  );
}

export default Button;
