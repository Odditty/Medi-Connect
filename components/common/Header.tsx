import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="max-w-screen-10xl p-4 mx-auto">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="relative h-15 w-15 text-accent">
            <Image src="/images/logo.png" alt="Logo" layout="fill" />
          </div>
        </Link>
        {session && session.user ? (
          <div
            className="flex items-center space-x-4 cursor-pointer bg-primaryDark rounded-full px-4 py-2"
            onClick={() => signOut()}
          >
            <span className="relative h-12 w-12 rounded-full overflow-hidden ">
              {session.user.image && session.user.name && (
                <Image
                  src={session.user?.image}
                  alt={session.user?.name}
                  layout="fill"
                  className="h-full w-full object-cover"
                  objectFit="cover"
                />
              )}
            </span>
            <span className="text-sm">{session.user?.name}</span>
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
