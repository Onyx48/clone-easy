// Home.jsx (as you provided, no changes needed for the click handler)
import React from "react";

function Home() {
  return (
    <div>
      {/* ... your existing Home component JSX ... */}
      <div className="fixed top-[20px] left-[70px] p-4 z-50">
        <div className="p-6 text-center font-bold text-white text-[150px] tracking-wider">
          HELLO
        </div>
      </div>
      {/* ... rest of your Home component ... */}
      <div className="fixed top-[210px] left-[60px] p-4 z-50">
        <div
          className="
          p-6
          text-center
          text-white
          text-[70px]
          tracking-wider

        "
        >
          I'm
        </div>
      </div>

      <div className="fixed top-[310px] left-[70px] p-4 z-50">
        <div className="inline-block">
          <div
            className="
                        /* Padding originally on the text div */
              text-center  /* Center text within this div */
              font-bold
              text-white
              text-[80px]
              tracking-wider
          "
          >
            Onyx
          </div>

          <div
            className="

              bg-blue-600
              h-0.5
              w-full
              mt-px
          "
          ></div>
        </div>
      </div>
      <div className="fixed top-[470px] left-[80px] w-[290px]">
        <div
          className="

                text-white"
        >
          Products that require Home Delivery like LED TVs, Home Theatres, Air
          Conditioners, Washing Machines, Refrigerators etc will only be
          exchanged by Croma in case of inherent manufacturing or transit
          defects
        </div>
      </div>
      <div className="fixed top-[640px] left-[80px]">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[35px] py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Resume
        </button>
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[35px] py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Contact Me
        </button>
      </div>
      <div
        className="
        text-white
        fixed
        transform
        z-50
        rotate-90
        right-[2px]
        top-[200px]

        "
      >
        <h3 className="text-[20px]">
          Let's Connect ----<span></span>
        </h3>
      </div>
    </div>
  );
}

export default Home;
