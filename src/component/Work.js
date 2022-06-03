import React from "react";
import { WORKINGIMG } from "../assets";
import { WorkData } from "../Data/Data";

const work = () => {
  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">//Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {WorkData.map((item, i) => {
            return (
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                key={item.id}
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={!item.demo ? null : item.demoUrl}>
                      <button
                        disabled={!item.demo}
                        className={
                          !item.demo
                            ? "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-not-allowed"
                            : "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                        }
                      >
                        Demo
                      </button>
                    </a>
                    <a href={!item.code ? null : item.codeUrl}>
                      <button
                        className={
                          !item.code
                            ? "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-not-allowed"
                            : "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                        }
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default work;
