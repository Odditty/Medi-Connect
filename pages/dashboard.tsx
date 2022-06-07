import React from "react";
import UserLayout from "../components/user/UserLayout";

type Props = {};

function dashboard({}: Props) {
  return (
    <UserLayout>
      <div className="container py-10">
        <h1 className="text-5xl">Dashboard</h1>
      </div>
    </UserLayout>
  );
}

dashboard.auth = true;

export default dashboard;
