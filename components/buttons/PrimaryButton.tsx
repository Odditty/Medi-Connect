import Link from "next/link";
import React from "react";

type Props = {
  to?: string;
  blank?: boolean;
  label: string;
  large?: boolean;
  className?: string;
  disabled?: boolean;
  click?: () => void;
};

export default function PrimaryButton({
  to,
  blank,
  label,
  click,
  large,
  className,
  disabled,
}: Props) {
  const classNames = `inline-flex items-center justify-center py-2 px-2 transition focus:outline-none focus-visible:bg-accentDark bg-accent hover:bg-accentDark hover:border-accentDark disabled:hover:bg-accent disabled:cursor-not-allowed text-primary border rounded border-accent ${
    large && "px-6 py-4"
  } ${label && "px-4"} ${className} `;

  const returnComponent = () => {
    if (to) {
      return (
        <Link className={classNames} href={to}>
          {label}
        </Link>
      );
    } else {
      return (
        <button className={classNames} onClick={click} disabled={disabled}>
          {label}
        </button>
      );
    }
  };

  return returnComponent();
}
