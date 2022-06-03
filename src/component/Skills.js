import React from "react";
import {
  AWS,
  CSS,
  GITHUB,
  HTML,
  JS,
  MONGO,
  NODE,
  REACT,
  TAILWIND,
} from "../assets";
import { ExperienceData } from "../Data/Data";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">
            // These are the technologies , I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {ExperienceData.map((item, i) => {
            return (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={`${item.name} icon`}
                  className="w-20 mx-auto"
                />
                <p className="my-4">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
