import { BellIcon } from "@heroicons/react/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import IconText from "./IconText";

type Props = {};

const userRightChecks = [
  {
    icon: "/images/icons/teeth.png",
    title: "Dental Health",
    subTitle: "November 08, 2021",
  },
  {
    icon: "/images/icons/brain.png",
    title: "Brain IQ Test",
    subTitle: "November 15, 2021",
  },
  {
    icon: "/images/icons/kidney.png",
    title: "Regular Kidney Check",
    subTitle: "November 25, 2021",
  },
];

function Rightbar({}: Props) {
  return (
    <div className="fixed top-0 right-0 h-100vh  overflow-y-scroll hide-scrollbar flex hidden bg-primaryLight lg:w-80 lg:block px-5 py-8 shadow-md dark:shadow-gray-800">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-sm">Upcomming Checkups</h3>
          <span className="h-10 w-10 bg-accent flex justify-center items-center rounded-full cursor-pointer">
            <BellIcon height="25" width="25" className="text-accentContrast" />
          </span>
        </div>
        <div>
          <div className="py-8 ">
            <Calendar date={new Date()} />
          </div>
          <div className="py-8">
            <div className="border-1 border-primary p-5 rounded">
              <h4 className="font-medium">Your Last Health Check</h4>
              <div className="py-4">
                {userRightChecks.map((check, index) => (
                  <IconText
                    key={index}
                    icon={check.icon}
                    title={check.title}
                    subTitle={check.subTitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
