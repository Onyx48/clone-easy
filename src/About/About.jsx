import React from "react";

function About() {
  return (
    // This div will now fill the flex-grow area provided by Container.jsx
    // We make *this* div a flex container to center its children.
    <div className="w-full h-full flex items-center justify-center">
      {" "}
      {/* Added w-full, h-full, flex, items-center, justify-center */}
      {/*
        This is the actual content block.
        Removed 'fixed', 'top-[100px]', 'justify-center', 'items-center'
        as layout is handled by the parent div.
      */}
      <div className="text-[120px] font-bold  text-white">ABOUT</div>
      <button
        type="button"
        className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-[22px] py-2.5 text-center me-2 mb-2  dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Bio
      </button>
      <button
        type="button"
        className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-[22px] py-2.5 text-center me-2 mb-2  dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Education
      </button>
      <button
        type="button"
        className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-[22px] py-2.5 text-center me-2 mb-2  dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Experiance
      </button>
      <div></div>
      {/* Add more content for your About page here.
          You can wrap them in other divs within this flex container
          and control their layout further. */}
    </div>
  );
}

export default About;
