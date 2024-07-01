import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps } from "react";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
type ButtonProps = ButtonVariantProps &
  (
    | ({ href?: undefined } & ComponentProps<"button">)
    | ({ href: string } & ComponentProps<typeof Link>)
  );

const buttonVariants = cva(
  "rounded border font-semibold hover:brightness-90 active:brightness-75 select-none cursor-pointer",
  {
    variants: {
      intent: {
        primary: "bg-blue-500 text-white border-blue-500",
        danger: "bg-red-500 text-white border-red-500",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-[15px]",
        lg: "px-5 py-2.5 text-[17px]",
      },
      outline: {
        true: "bg-white",
        false: "",
      },
    },
    compoundVariants: [
      { intent: "primary", outline: true, className: "text-blue-500" },
      { intent: "danger", outline: true, className: "text-red-500" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      outline: false,
    },
  }
);

function Button({ intent, size, outline, children, ...props }: ButtonProps) {
  if (props.href) {
    return (
      <Link className={buttonVariants({ intent, size, outline })} {...props}>
        {children}
      </Link>
    );
  } else if (typeof props.href === "undefined") {
    return (
      <button className={buttonVariants({ intent, size, outline })} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
