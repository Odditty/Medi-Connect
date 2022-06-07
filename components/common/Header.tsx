import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="max-w-screen-10xl p-4 mx-auto">
      <nav className="flex justify-between items-center">
        <Link href="/">MEDI-CONNECT</Link>
        {session && session.user ? (
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => signOut()}
          >
            <span className="h-10 w-10 rounded-full overflow-hidden bg-accent">
              {session.user.image && (
                <img
                  src={session.user?.image}
                  alt={session.user?.image}
                  className="h-full w-full object-cover"
                />
              )}
            </span>
            <span>{session.user?.name}</span>
          </div>
        ) : (
          <div className="flex space-x-5">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
