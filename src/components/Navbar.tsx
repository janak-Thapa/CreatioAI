import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
     <MobileSidebar/>

      <div className="flex w-full justify-end">
        <UserButton  afterSwitchSessionUrl="/"/>
      </div>
    </div>
  );
};

export default Navbar;
