import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-transparent">
        <nav className="flex text-white items-center justify-between py-4 text-[17px]">
          <div className="logo-area">
            <span className="text-xxl font-bold">logo</span>
          </div>
          <ul className=" flex items-center gap-x-6 justify-between">
            <button
              type="button"
              className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-[22px] py-2.5 text-center me-2 mb-2  dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Home
            </button>

            <button
              type="button"
              className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-[22px] py-2.5 text-center me-2 mb-2  dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              About Me
            </button>

            <button
              type="button"
              className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-[22px] py-2.5 text-center me-2 mb-2  dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Services
            </button>

            <button
              type="button"
              className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-[22px] py-2.5 text-center me-2 mb-2  dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Skills
            </button>

            <button
              type="button"
              className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-[22px] py-2.5 text-center me-2 mb-2  dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 "
            >
              Contact Me
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
