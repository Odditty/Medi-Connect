import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="max-w-screen-10xl p-4 mx-auto">
      <nav className="flex justify-between items-center">
        <Link href="/">Home</Link>
        <div className="flex space-x-5">
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      </nav>
    </header>
  );
}
