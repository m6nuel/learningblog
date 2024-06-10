"use client";
import Image from "next/image";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-800">
      <div className="flex mx-auto justify-between items-center max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="">
          <NavLinks />
        </div>
        <div className="flex items-center">
          {
            session?.user ? (
              <span className="text-white">hola, {session?.user?.name}</span>
            ) : (
              ''
            )
          }
            <LoginButton />
          <div>
            <button
              type="button"
              className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              {
                session?.user ? (
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={session?.user?.image as string}
                    alt="profile image"
                    height={300}
                    width={300}
                  />

                ) : (
                    <UserCircleIcon 
                      className="text-white h-10"
                    />
                )
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
