import React from "react";
import HeadTag from "../HeadTag";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function UserLayout({ children }: Props) {
  return (
    <>
      <div className="flex h-full min-h-100vh">
        <HeadTag title="Dashboard" />
        <div className=" w-20 sm:w-30">
          <Sidebar />
        </div>
        <div className="flex flex-1">{children}</div>
      </div>
    </>
  );
}
