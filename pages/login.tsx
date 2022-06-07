import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import HeadTag from "../components/HeadTag";
import loginBannerImage from "../public/images/login-banner.jpg";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";

const Login: NextPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/");
    }
  }, [session]);

  return (
    <div>
      <HeadTag title="Login" />
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100vh]">
        <div className="relative min-h-30vh h-full w-full">
          <Image
            src={loginBannerImage}
            layout="fill"
            objectFit="cover"
            alt="Login Banner"
            placeholder="blur"
          />
        </div>
        <div className="flex justify-center items-center w-full p-5">
          <div className="flex flex-col w-full max-w-xl mx-auto ">
            <h1 className="text-4xl font-bold text-accent">Login</h1>
            <form className="py-8 h-full w-full flex flex-col space-y-5">
              <div className="flex flex-col space-y-2">
                <label htmlFor="Email Id">Email ID</label>
                <input className="input" type="email" placeholder="Email ID" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="Password">Password</label>
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between flex-row md:flex-row">
                <Link href="/">Forgot Password?</Link>
                <Link href="/signup">Create account</Link>
              </div>
              <PrimaryButton
                label="Login"
                className="w-full md:w-50"
                disabled={true}
              />
              <PrimaryButton
                label="Login With Google"
                className="w-full md:w-50"
                click={() => signIn()}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
