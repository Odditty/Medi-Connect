import { BellIcon } from "@heroicons/react/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";

type Props = {};

function Rightbar({}: Props) {
  return (
    <div className="flex hidden lg:w-80 lg:block px-5 py-8 shadow-md dark:shadow-gray-800">
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
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
