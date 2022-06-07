import Link from "next/link";
import React from "react";

type Props = {
  to?: string;
  blank?: boolean;
  label: string;
  large?: boolean;
  className?: string;
  click?: () => void;
};

export default function SecondaryButton({
  to,
  blank,
  label,
  click,
  large,
  className,
}: Props) {
  const classNames = `inline-flex items-center justify-center py-2 px-2 transition focus:outline-none focus-visible:bg-accentDark hover:bg-accentDark hover:text-primary border rounded border-accent ${
    large && "px-6 py-4"
  } ${label && "px-4"} ${className} `;

  const returnComponent = () => {
    if (to) {
      return (
        <Link href={to}>
          <a className={classNames}>{label}</a>
        </Link>
      );
    } else {
      return (
        <button className={classNames} onClick={click}>
          {label}
        </button>
      );
    }
  };

  return returnComponent();
}
