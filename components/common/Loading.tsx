import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex w-full flex-1 flex-col items-center px-20 max-w-screen-lg mx-auto">
      <div className="mt-12 w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border border-primaryDark p-6 ">
        <div className="flex flex-col space-y-2">
          <div className="h-6 w-11/12 rounded-md bg-primaryDark "></div>
          <div className="h-6 w-10/12 rounded-md bg-primaryDark "></div>
          <div className="h-6 w-9/12 rounded-md bg-primaryDark "></div>
          <div className="h-6 w-9/12 rounded-md bg-primaryDark "></div>
        </div>
      </div>
      <div className="mt-12 w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border border-primaryDark p-6 ">
        <div className="flex flex-col space-y-2">
          <div className="h-6 w-11/12 rounded-md bg-primaryDark "></div>
          <div className="h-6 w-10/12 rounded-md bg-primaryDark "></div>
          <div className="h-6 w-9/12 rounded-md bg-primaryDark "></div>
          <div className="h-6 w-9/12 rounded-md bg-primaryDark "></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
