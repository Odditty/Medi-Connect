import React from "react";
import DynamicHeroIcon from "../common/DynamicHeroIcon";

type Props = {
  icon: any;
  cardType: string;
  subTitle: string;
};

function DoctorRating({ icon, cardType, subTitle }: Props) {
  const returnCardType = () => {
    if (cardType === "rating") {
      return <span className="text-secondaryDark text-sm">Your rating</span>;
    } else if (cardType === "qa") {
      return <span className="text-secondaryDark text-sm">Your Q/A</span>;
    } else {
      return <span className="text-secondaryDark text-sm">Research</span>;
    }
  };

  return (
    <div className="bg-primaryLight shadow flex flex-1 justify-between items-center p-4 rounded-lg gap-6">
      <div className="rounded-full h-10 w-10 bg-accent flex justify-center items-center ">
        <DynamicHeroIcon icon={icon} className="text-accent" />
      </div>
      <div className="flex flex-col">
        {returnCardType()}
        <span className="font-bold">{subTitle}</span>
      </div>
    </div>
  );
}

export default DoctorRating;
