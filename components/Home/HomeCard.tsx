import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  mainTitle: string;
  subTitle?: string;
  image: string;
  link: string;
  bgColor?: string;
};

export default function HomeCard({
  mainTitle,
  subTitle,
  image,
  link,
  bgColor,
}: Props) {
  return (
    <div
      className="relative flex flex-col justify-center space-y-4 py-10 px-8 rounded"
      style={{
        background: bgColor,
      }}
    >
      <Link href={link}>
        <h2 className="flex items-end text-xl md:text-4xl break-words space-x-4 cursor-pointer z-2">
          <span dangerouslySetInnerHTML={{ __html: mainTitle }} />
          <span className="bg-accentDark h-10 w-10 relative flex justify-center items-center rounded-full">
            <span className="text-2xl absolute top-1 bottom-0 text-accentContrast">
              &#x279D;
            </span>
          </span>
        </h2>
      </Link>
      <h1 className="text-lg md:text-3xl md:text-xl text-[#d0846e] font-semibold max-w-sm lg:max-w-md z-2">
        {subTitle}
      </h1>
      <div className="absolute right-0 top-0 h-40 w-40 !mt-0 z-0">
        <div className="relative h-full w-ful">
          <Image
            src={image}
            layout="fill"
            objectFit="contain"
            alt="Doctors image"
          />
        </div>
      </div>
    </div>
  );
}
