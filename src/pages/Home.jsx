import { NavLink } from "react-router-dom";

import "../style/Home.css";
export default function Home() {
  return (
    <div className="mr-0 w-full opacity-0.5  ">
      <div className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-24">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1   mt-80 space-y-8 text-center sm:text-right sm:ml-auto ">
            <h2 className="text-4xl font-bold sm:text-5xl">
              
              {/* <span className="hidden sm:block text-4xl">Let Get Anlyse</span> */}
            </h2>

            <NavLink
              className=" button inline-flex   text-white items-center px-6 py-3 font-extrabold bg-gradient-to-r from-teal-400 to-orange-500 hover:from-pink-500 hover:to-orange-500 focus:ring-4 focus:ring-blue-400 rounded-4xl hover:opacity-75"
              to="/Bodyy"
            >
              <svgs
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svgs>
              &nbsp; Let Start
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
