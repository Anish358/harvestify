"use client";

import React from "react";
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logout from "../../../assets/logout.svg";

const page = () => {
  const router = useRouter();

  return (
    <div className="mt-10 px-6">
      <h1>Dashboard</h1>
      <UserButton />
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
          <div className="flex cursor-pointer gap-4 p-4">
            <Image src={logout} alt="logout" width={24} height={24} />

            <p className="text-light-2 max-lg:hidden">Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
  );
};

export default page;
