// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Header() {
  // Get the navigate function from the hook
  const navigate = useNavigate();

  // Generic click handler for navigation buttons
  const handleNavClick = (path) => {
    console.log(`Button clicked, navigating to ${path}`);
    // Add any other logic you want here before navigating, e.g.:
    // - Close a mobile menu
    // - Trigger a small animation
    // - Log an event

    // Use the navigate function to change the route
    navigate(path);
  };

  return (
    <div>
      <header className="bg-transparent">
        <nav className="flex text-white items-center justify-between py-4 text-[17px]">
          <div className="logo-area">
            {/* You might want this to navigate home as well */}
            <span
              className="text-xxl font-bold cursor-pointer"
              onClick={() => handleNavClick("/home")}
            >
              logo
            </span>
          </div>
          <ul className=" flex items-center gap-x-6 justify-between">
            <li>
              {" "}
              {/* Wrap buttons in list items for semantic list */}
              <button
                type="button"
                // Add the onClick handler here, calling handleNavClick with the target path
                onClick={() => handleNavClick("/home")}
                className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-[22px] py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Home
              </button>
            </li>

            <li>
              <button
                type="button"
                // Add the onClick handler
                onClick={() => handleNavClick("/about")}
                className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-[22px] py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                About Me
              </button>
            </li>

            <li>
              <button
                type="button"
                // Assuming '/services' is the route for Services
                onClick={() => handleNavClick("/services")}
                className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-[22px] py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Services
              </button>
            </li>

            <li>
              <button
                type="button"
                // Add the onClick handler
                onClick={() => handleNavClick("/skills")}
                className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-[22px] py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Skills
              </button>
            </li>

            <li>
              <button
                type="button"
                // Assuming '/contact' is the route for Contact Me
                onClick={() => handleNavClick("/contact")}
                className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-[22px] py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 "
              >
                Contact Me
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
