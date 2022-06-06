import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: string;
  link: string;
};

export default function HomeCircleItem({ title, image, link }: Props) {
  return (
    <div className="flex flex-col cursor-pointer ">
      <Link href={link}>
        <div className="flex flex-col items-center space-y-4">
          <div className="h-20 md:h-40 w-20 md:w-40 rounded-full">
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <h4 className="text-center">{title}</h4>
          <h5 className="text-sm text-center text-accent">Consult Now</h5>
        </div>
      </Link>
    </div>
  );
}
