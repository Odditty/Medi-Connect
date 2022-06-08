import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  UserGroupIcon,
  ChartPieIcon,
  CogIcon,
  LogoutIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { useThemeContext } from "../../context/theme";
import { signOut } from "next-auth/react";

type Props = {};

function Sidebar({}: Props) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="fixed top-0 left-0 h-100vh bg-primary  flex w-20 sm:w-30 px-5 py-8 shadow-md dark:shadow-gray-800">
      <div className="flex flex-1 flex-col items-center">
        <div className="py-10 border-b-2 rounded-sm border-primaryDark">
          <Link href="/">
            <span className="bg-accentDark text-accentContrast p-2 flex flex-grow-0 justify-center items-center rounded cursor-pointer">
              <HomeIcon height="25" width="25" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col space-y-5 py-10 border-b-2 rounded-sm border-primaryDark">
          <Link href="/">
            <span className="text-secondaryDark p-2 flex flex-grow-0 justify-center items-center rounded cursor-pointer">
              <UserGroupIcon height="25" width="25" />
            </span>
          </Link>
          <Link href="/">
            <span className="text-secondaryDark p-2 flex flex-grow-0 justify-center items-center rounded cursor-pointer">
              <ChartPieIcon height="25" width="25" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col space-y-5 py-10 border-b-2 rounded-sm border-primaryDark">
          <Link href="/">
            <span className="text-secondaryDark p-2 flex flex-grow-0 justify-center items-center rounded cursor-pointer">
              <CogIcon height="25" width="25" />
            </span>
          </Link>
          <button
            onClick={toggleTheme}
            className="flex justify-center items-center"
          >
            {theme === "light" ? (
              <MoonIcon height="25" width="25" />
            ) : (
              <SunIcon height="25" width="25" />
            )}
          </button>
          <button
            onClick={() => signOut()}
            className="flex justify-center items-center text-error"
          >
            <LogoutIcon height="25" width="25" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
