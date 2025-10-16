"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react"; // ikon panah dari lucide-react

export default function SkillDrawer(){
    const [open, setOpen] = useState(false);

    const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Pandas",
    "Tablue",
  ];
  return(
    <div>
        <button onClick={() => setOpen(!open)}
            className={`fixed right-6 top-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg
              hover:bg-gray-700 transition-all duration-700 ease-in-out z-[9999]
              transform -translate-y-1/2 
        ${open ? "translate-y-12 translate-x-[-20px]" : "translate-y-0"}`}>
                <ChevronLeft
          className={`h-6 w-6 transition-transform duration-300 ${
            open ? "-rotate-180" : ""
          }`}
        />
        </button>

        {/* panel skill */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-grey text-white p-6 shadow-lg transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"}`} >
          <h2 className="text-xl font-semibold mb-4 border-b border-grey-700 pb-2">
            My Skills
          </h2>
          <ul className="space-y-2">
             {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-800 rounded-lg py-2 px-3 hover:bg-gray-700 transition"
            >
              {skill}
            </li>
          ))}
          </ul>
        </div>
    </div>
  )
}