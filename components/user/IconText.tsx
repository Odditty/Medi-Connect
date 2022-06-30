import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  title: string;
  subTitle: string;
};

function IconText({ icon, title, subTitle }: Props) {
  return (
    <div className="flex space-x-3 py-4">
      <div className="relative rounded-full p-2 h-10 w-10 bg-primary flex justify-center items-center ">
        <Image
          src={icon}
          className="text-accent"
          alt={title}
          height={25}
          width={25}
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-md">{title}</span>
        <span className="text-xs text-secondaryLight">{subTitle}</span>
      </div>
    </div>
  );
}

export default IconText;
