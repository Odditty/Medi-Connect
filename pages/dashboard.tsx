import { useSession } from "next-auth/react";
import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import UserLayout from "../components/user/UserLayout";

type Props = {};

function dashboard({}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  return (
    <UserLayout>
      {session && (
        <div className="container py-10 px-5">
          <div>
            <div>
              <div>
                <h1>Hi {session.user?.name}</h1>
                <h2 className="text-3xl font-bold">Welcome Back !</h2>
              </div>
            </div>
            <div className="flex items-center bg-accentDark min-h-40vh my-10 rounded-xl p-5">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <h3 className="text-sm">Reminder</h3>
                  <h3 className="text-2xl max-w-50">
                    Have you Had a Routine Check this Month ?
                  </h3>
                  <div className="flex space-x-5 my-5">
                    <PrimaryButton label="Check Now" />
                    <SecondaryButton label="View Report" />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </UserLayout>
  );
}

dashboard.auth = true;

export default dashboard;
