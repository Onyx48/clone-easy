import React from "react";

function About() {
  return (
    // This div now fills the flex-grow area provided by Container.jsx
    // It remains a flex-col to stack the "ABOUT" text and the content below it.
    // items-center centers items horizontally in a column.
    // justify-center centers the entire block vertically.
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* The main title "ABOUT" */}
      {/* Added mb-10 for a bit more space below the title */}
      <div className="text-[120px] font-bold text-white mb-10">ABOUT</div>
      {/*
        This is the new container for the content *below* the ABOUT title.
        It's a flex container (row by default) to place the image and the right-side content side-by-side.
        We'll use items-start or items-baseline to align the top of the right column
        (where the buttons are) closer to the top of the image. items-start is usually simplest.
        gap-x-16 adds space between the image box and the right-side column.
      */}
      <div className="flex items-start gap-x-16">
        {" "}
        {/* Changed items-center to items-start */}
        {/* Placeholder for the Image Box */}
        {/* You can replace this div with an <img> tag later */}
        {/* Added w-64 h-64 as a placeholder size */}
        <div className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700">
          [ Image Box ]
        </div>
        {/*
          This is the new container for the content on the right (buttons + context area).
          It's a flex-col to stack the buttons above the context area.
          This div's top edge will align with the top edge of the image box because of items-start above.
        */}
        <div className="flex flex-col">
          {" "}
          {/* New flex-col container */}
          {/*
            This is the div wrapping the buttons.
            It's still a flex row (default) to keep buttons side-by-side.
            Added mb-4 to create space between buttons and potential context below.
          */}
          <div className="flex mb-4">
            {" "}
            {/* Added mb-4 */}
            <button
              type="button"
              className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-[22px] py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Bio
            </button>
            <button
              type="button"
              className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-[22px] py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Education
            </button>
            <button
              type="button"
              className="text-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-[22px] py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Experience {/* Corrected typo */}
            </button>
          </div>{" "}
          {/* End of buttons div */}
          {/* Placeholder for the Context area that appears when buttons are clicked */}
          {/* You will likely conditionally render content here based on state */}
          {/* Added a placeholder div with a specific size/color for visualization */}
          <div className="w-96 h-40 bg-gray-700 rounded-lg flex items-center justify-center text-white">
            [ Context Area ]
          </div>{" "}
          {/* End of context placeholder */}
        </div>{" "}
        {/* End of right-side flex-col container */}
      </div>{" "}
      {/* End of flex items-start gap-x-16 div */}
    </div>
  );
}

export default About;
