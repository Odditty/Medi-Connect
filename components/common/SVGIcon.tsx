import Image from "next/image";
import React from "react";

type Props = {
  height: string;
  width: string;
  className: string;
  icon: string;
};

function SVGIcon({ height, width, className, icon }: Props) {
  return (
    <Image
      src={`/images/icons/${icon}.svg`}
      height={height}
      width={width}
      alt={`${icon}-icon`}
    />
  );
}

export default SVGIcon;
