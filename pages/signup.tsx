import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import HeadTag from "../components/HeadTag";

const Signup: NextPage = () => {
  return (
    <div>
      <HeadTag title="Signup " />
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100vh]">
        <div className="relative h-full w-full">
          <Image
            src="/images/signup-banner.jpg"
            layout="fill"
            objectFit="cover"
            alt="Login Banner"
          />
        </div>
        <div className="flex justify-center items-center w-full p-5">
          <div className="flex flex-col w-full max-w-xl mx-auto ">
            <h1 className="text-4xl font-bold text-accent">Signup</h1>
            <form className="py-8 h-full w-full flex flex-col space-y-5">
              <div className="flex flex-col space-y-2">
                <label htmlFor="Email Id">Full name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="Email Id">Email ID</label>
                <input
                  className="input"
                  type="email"
                  placeholder="Email ID"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="Password">Password</label>
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="Password">Confirm Password</label>
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex">
                <Link href="/login">Already have account ? Login</Link>
              </div>
              <PrimaryButton
                label="Create account"
                className="w-full md:w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
