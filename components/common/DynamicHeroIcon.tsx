// Simple Dynamic HeroIcons Component for React (typescript / tsx)
// by: Mike Summerfeldt (IT-MikeS - https://github.com/IT-MikeS)

import { FC } from "react";
import * as HIcons from "@heroicons/react/outline";

const DynamicHeroIcon: FC<{ icon: string; className: string }> = (props) => {
  const { ...icons } = HIcons;
  // @ts-ignore
  const TheIcon: JSX.Element = icons[props.icon];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon
        className={`h-6 w-6 text-white ${props.className}`}
        aria-hidden="true"
      />
    </>
  );
};

export default DynamicHeroIcon;
