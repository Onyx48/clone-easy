import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-transparent">
        <nav className="flex text-white items-center justify-between px-8 py-4">
          <div className="logo-area">

            <span className="text-xxl font-bold">logo</span>
          </div>
          <ul className=" flex items-center gap-x-6 justify-between">
            <button>Home</button>
            <button>About me</button>
            <button>Services</button>
            <button>Skills</button>
            <button>Contact Me</button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
