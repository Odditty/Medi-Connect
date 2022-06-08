import React from "react";
import DoctorRating from "./DoctorRating";
import { ChatIcon, SearchIcon, StarIcon } from "@heroicons/react/outline";

type Props = {};

const doctorDashList = [
  {
    cardType: "rating",
    icon: "StarIcon",
    subTitle: "8.5/10",
  },
  {
    cardType: "qa",
    icon: "ChatIcon",
    subTitle: "15 Active",
  },
  {
    cardType: "research",
    icon: "SearchIcon",
    subTitle: "3 Active",
  },
];

function DoctorDash({}: Props) {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-10 xl:gap-20 max-w-screen-md mx-auto">
        {doctorDashList.map((item, index) => (
          <DoctorRating
            key={index}
            cardType={item.cardType}
            icon={item.icon}
            subTitle={item.subTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default DoctorDash;
