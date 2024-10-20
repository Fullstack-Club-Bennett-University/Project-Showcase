import React from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../assets/l2-removebg.png";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex  justify-between items-center  text-center p-3">
        <div className="items-center text-2xl max-md:text-xl">
          <img className="h-10" src="./l2-removebg.png"></img>
        </div>
        <div className="flex mr-[45px] ">
          <div className="flex items-center cursor-pointer gap-x-10 max-md:hidden">
            <div
              className="hover:text-amber-300"
              onClick={() => {
                navigate("/dashboard");
              }}
              href="/"
            >
              Student Body
            </div>
            {/* <div
              onClick={() => {
                navigate("/Contact-us");
              }}
            >
              Contact us
            </div> */}
            {/* <div
              onClick={() => {
                navigate("/resources");
              }}
              href="/"
            >
              Reosurces
            </div> */}
            <div
              className="hover:text-amber-300"
              onClick={() => {
                navigate("/dashboard-parent");
              }}
              href="/"
            >
              Cabinet
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          {/* <button
            onClick={() => {
              navigate("/signin");
            }}
          >
            {" "}
            login{" "}
          </button> */}
          <div>
            {" "}
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className="p-2 border rounded-xl border-slate-500 hover:bg-white hover:text-black max-md:hidden"
            >
              Login
            </button>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
