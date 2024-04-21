import React from "react";
import Image from "next/image";
import LoginIcon from "./LoginIcon";

const NavbarHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-2 px-4 border-b border-gray-300">
      {/* Left section with logo/icon */}
      <div className="flex items-center">
        <div className="mr-4">
          {/* Replace 'logo.png' with the path to your logo/icon */}
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
        {/* Brand name */}
        <div>
          {/* Punchline */}
          <h1 className="text-l font-semibold mb-1">Grenminister.com</h1>
          <p className="text-sm italic">Online trade-route</p>
        </div>
      </div>
      {/* Middle section with category, search bar, and go button */}
      <div className="flex items-center mx-auto" style={{ width: 1000 }}>
        {/* Category dropdown (if applicable) */}
        <select
          className="mr-2 border border-gray-200 rounded-md px-2 py-1"
          style={{ width: 108, height: 42 }} // Adjust width to accommodate longer text
          defaultValue="" // Set the default value to empty
        >
          <option value="" disabled hidden>
            Category
          </option>
          <option value="manufacturing">Manufacturing</option>
          <option value="workplace">Workplace</option>
          <option value="consumer_goods">Consumer Goods</option>
          <option value="professional_service">Professional Service</option>
          <option value="rental">Rental</option>
          <option value="transportation">Transportation</option>
          <option value="cell_phone_accessories">Cell Phone Accessories</option>
          <option value="computer_accessories">Computer Accessories</option>
          <option value="health_personal_care">Health and Personal Care</option>
          <option value="automotive_accessories">
            Automotive Accessories
          </option>{" "}
          {/* Add other category options */}
        </select>
        {/* Search bar */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="flex-grow border border-gray-400 rounded-md px-2 py-1"
          style={{ width: 768, height: 42, marginRight: 2 }} // Adjust width to fit remaining space
        />
        {/* GO button */}
        <button
          className="border border-gray-400 rounded-md px-2 py-1"
          style={{
            width: 42,
            height: 42,
            background:
              "linear-gradient(to top, #eaeaea, #dbdbdb, #f2f2f2, #dbdbdb)",
          }}
        >
          GO
        </button>
      </div>
      {/* Right section with login icon */}
      <LoginIcon />
    </header>
  );
};

export default NavbarHeader;
