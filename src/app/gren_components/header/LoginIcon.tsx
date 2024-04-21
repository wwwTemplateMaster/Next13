"use client";

// import { useState } from "react"; // Import useState hook

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  // State for managing menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
          hidden
          md:block
          text-sm 
          font-semibold 
          py-3 
          px-4 
          rounded-full 
          hover:bg-neutral-100 
          transition 
          cursor-pointer
        "
        >
          Airbnb your home
        </div>

        {/* User menu button */}
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
        "
          style={{
            width: 87,
            height: 47,
          }}
        >
          <AiOutlineMenu />
          {/* Display user avatar if currentUser exists */}
          <div className="hidden md:block" style={{ width: 43, height: 35 }}>
            {/* <Avatar /> */}
            <Avatar />
          </div>
        </div>
      </div>

      {/* Conditional rendering of menu content */}
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" onClick={() => {}} />
              <MenuItem label="Sign up" onClick={() => {}} />
            </>

            {/* Menu items */}

            {/* <MenuItem /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
