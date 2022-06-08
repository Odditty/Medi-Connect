import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import ChartDashBoard from "../../components/user/dashboard/ChartDashBoard";
import UserLayout from "../../components/user/UserLayout";

import dashBannerImage from "../../public/images/dashboard/illus1.png";

type Props = {};

function dashboard({}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  return (
    <UserLayout>
      {session && (
        <div className="w-full py-10 px-5 sm:px-10">
          <div>
            <div>
              <div>
                <h1>Hi {session.user?.name}</h1>
                <h2 className="text-3xl font-bold">Welcome Back !</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-accentDark min-h-40vh my-10 rounded-xl ">
              <div className="flex items-center py-5 px-10">
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-md xl:text-xl text-accentContrast">
                    Reminder
                  </h3>
                  <h3 className="text-2xl text-accentContrast sm:text-4xl 2xl:text-6xl xl:max-w-200 max-w-80">
                    Have you Had a Routine Check this Month ?
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-5 my-5">
                    <PrimaryButton
                      label="Check Now"
                      className="text-accentContrast"
                    />
                    <SecondaryButton
                      label="View Report"
                      className="text-accentContrast"
                      to="/dashboard/doctor"
                    />
                  </div>
                </div>
              </div>
              <div className="relative h-full hidden md:block">
                <Image
                  src={dashBannerImage}
                  layout="fill"
                  objectFit="contain"
                  alt="Doctors image"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <ChartDashBoard />
        </div>
      )}
    </UserLayout>
  );
}

dashboard.auth = true;

export default dashboard;
