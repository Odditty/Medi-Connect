import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import DoctorLayout from "../../components/doctor/DoctorLayout";

import dashBannerImage from "../../public/images/dashboard/illus2.png";
import DoctorDash from "../../components/doctor/dashboard/DoctorDash";

type Props = {};

function doctor({}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  return (
    <DoctorLayout>
      {session && (
        <div className="w-full py-10 px-5 sm:px-10">
          <div>
            <div>
              <div>
                <h1>Hi {session.user?.name}</h1>
                <h2 className="text-3xl font-bold">Welcome Back Doctor !</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-accentDark min-h-40vh my-10 rounded-xl ">
              <div className="flex items-center py-5 px-10">
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-md xl:text-xl text-accentContrast">
                    Reminder
                  </h3>
                  <h3 className="text-2xl text-accentContrast sm:text-4xl 2xl:text-6xl xl:max-w-200 max-w-80">
                    You Have 2 Appointments today
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-5 my-5">
                    <PrimaryButton
                      label="View Appointments"
                      className="text-accentContrast"
                    />
                    <SecondaryButton
                      label="Reschedule "
                      className="text-accentContrast"
                      to="/dashboard"
                    />
                  </div>
                </div>
              </div>
              <div className="relative h-full hidden md:block">
                <Image
                  src={dashBannerImage}
                  layout="fill"
                  objectFit="cover"
                  alt="Doctors image"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <DoctorDash />
        </div>
      )}
    </DoctorLayout>
  );
}

doctor.auth = true;

export default doctor;
