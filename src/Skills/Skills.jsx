import React, { useState } from "react";

// Define the data structure for skills by category
const skillsData = {
  "UI/UX": [
    { name: "Figma", proficiency: 9 }, // Proficiency out of 10 circles
    { name: "Sketch", proficiency: 7 },
    { name: "Adobe XD", proficiency: 8 },
    { name: "Prototyping", proficiency: 9 },
    { name: "User Research", proficiency: 7 },
    { name: "Wireframing", proficiency: 8 },
  ],
  Automation: [
    { name: "Selenium", proficiency: 8 },
    { name: "Cypress", proficiency: 9 },
    { name: "Playwright", proficiency: 7 },
    { name: "API Testing", proficiency: 8 },
    { name: "CI/CD Integration", proficiency: 6 },
    { name: "Jest", proficiency: 9 },
  ],
  Language: [
    { name: "JavaScript", proficiency: 9 },
    { name: "Python", proficiency: 8 },
    { name: "Java", proficiency: 7 },
    { name: "C#", proficiency: 6 },
    { name: "SQL", proficiency: 8 },
    { name: "TypeScript", proficiency: 9 },
  ],
  // Add more categories and skills as needed
};

// Define the total number of circles to display for proficiency
const totalCircles = 10;

function Skills() {
  // State to track the currently selected category
  const [selectedCategory, setSelectedCategory] = useState("UI/UX"); // Set default category

  // Get the skills data for the selected category
  const currentSkills = skillsData[selectedCategory] || []; // Use default empty array if category not found

  return (
    // Main container: full width/height, centered flex column
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      {" "}
      {/* Added padding for safety */}
      {/* The main title "ABOUT" */}
      {/* Used text-8xl as 120px might be huge, adjust as needed. Added margin-bottom */}
      <div className="text-8xl font-bold text-white mb-16">SKILLS</div>
      {/* Container for Category Buttons and Skills Grid */}
      {/* This container is centered horizontally because its parent has items-center */}
      <div className="flex flex-col items-center">
        {" "}
        {/* flex-col to stack buttons above grid, items-center to center them */}
        {/* Category Buttons */}
        {/* mb-12 adds space between buttons and grid, gap-x-6 adds space between buttons */}
        <div className="flex mb-12 gap-x-6">
          {/* Map over the keys (category names) from the skillsData object */}
          {Object.keys(skillsData).map((category) => (
            <button
              key={category} // Unique key for React list rendering
              type="button"
              // Apply conditional classes based on whether this button's category is selected
              className={`
                font-medium rounded-lg px-6 py-2.5 text-center transition-colors duration-200 ease-in-out
                ${
                  selectedCategory === category
                    ? "bg-blue-700 text-white shadow-lg" // Style for the active (selected) button
                    : "text-blue-700 hover:bg-blue-800 dark:text-white dark:hover:text-white dark:hover:bg-blue-500" // Style for inactive buttons
                }
                focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
              `}
              onClick={() => setSelectedCategory(category)} // Update state on click
            >
              {category}
            </button>
          ))}
        </div>{" "}
        {/* End of Category Buttons */}
        {/* Skills Grid */}
        {/* flex-col to stack rows, gap-y-6 for vertical space between rows */}
        <div className="flex flex-col gap-y-6">
          {/* Map over the skills array for the currently selected category */}
          {currentSkills.map((skill) => (
            <div key={skill.name} className="flex items-center">
              {" "}
              {/* Row for a single skill */}
              {/* Skill Name - Fixed width and right-aligned for layout */}
              <div className="text-white text-lg mr-8 w-32 text-right">
                {skill.name}
              </div>
              {/* Circles and Percentage */}
              {/* flex items-center aligns circles/percentage vertically, gap-x-4 adds space between circle group and percentage */}
              <div className="flex items-center gap-x-4 flex-grow">
                {" "}
                {/* flex-grow allows it to take available space */}
                {/* Proficiency Circles */}
                {/* flex for horizontal layout, gap-x-1 for small space between circles */}
                <div className="flex gap-x-1">
                  {/* Map to render 10 circles */}
                  {[...Array(totalCircles)].map((_, i) => (
                    <div
                      key={i} // Unique key for each circle
                      className={`w-5 h-5 rounded-full border border-blue-600 ${
                        // Added border for definition
                        i < skill.proficiency
                          ? "bg-blue-500" // Filled circles
                          : "bg-blue-900 opacity-50" // Darker, unfilled circles (used a darker blue)
                      }`}
                    ></div>
                  ))}
                </div>{" "}
                {/* End of Proficiency Circles */}
                {/* Percentage Circle - Displayed after the proficiency circles */}
                {/* Only show if proficiency > 0. ml-auto pushes it to the right */}
                {skill.proficiency > 0 && (
                  <div className="w-12 h-12 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center ml-4">
                    {skill.proficiency * 10}%
                  </div>
                )}
              </div>{" "}
              {/* End of Circles and Percentage container */}
            </div> // End of Skill Row
          ))}
        </div>{" "}
        {/* End of Skills Grid */}
      </div>{" "}
      {/* End of Container for Buttons and Grid */}
    </div>
  );
}

export default Skills;
