"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import logo from "../../assets/logo_transparent.png";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const Navbar = ({ user }) => {
  const router = useRouter();

  console.log(user);

  return (
    <div>
      <div className="flex flex-row justify-between mx-10 my-5 ">
        <Image
          className="cursor-pointer flex-none"
          src={logo}
          alt="logo"
          width={200}
          height={200}
          onClick={() => router.push("/")}
        />
        <div className="flex items-center">
          {/* <Button
            variant="ghost"
            className="mx-5 text-lg"
            onClick={() => router.push("/about")}
          >
            About
          </Button> */}
          <Button
            variant="ghost"
            className="mx-5 text-lg"
            onClick={() => router.push("/services")}
          >
            Services
          </Button>
          {!user ? (
            <Button
              onClick={() => router.push("/sign-in")}
              variant="ghost"
              className="mx-5 text-lg"
            >
              Get Started
            </Button>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
