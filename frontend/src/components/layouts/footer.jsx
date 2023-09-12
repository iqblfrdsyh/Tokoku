import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillApple,
} from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
// import Button from "../button/button";

const Footer = {
  Footer1: () => {
    return (
      <React.Fragment>
        <footer className="border-y-2 flex flex-col items-center gap-[20px] py-14 w-full bottom-0 bg-transparent">
          <div className="flex gap-[15px]">
            <p className="text-[20px] hover:text-blue-600">
              <Link to="/about">About</Link>
            </p>
            <p className="text-[20px] hover:text-blue-600">
              <Link to="/help">Help</Link>
            </p>
          </div>
          <div>
            <p>Copyright 2023 Kasir</p>
          </div>
        </footer>
      </React.Fragment>
    );
  },
  Footer2: () => {
    return (
      <React.Fragment>
        <footer className="border-y-2 items-center relative w-full bottom-0 mt-[100px] bg-transparent">
          <div className="flex justify-between flex-wrap px-16 py-11">
            <div>
              <h3
                className="text-[25px] font-semibold"
                style={{ fontFamily: "Kaushan Script, cursivet" }}
              >
                Tokoku
              </h3>
              <p>2023 Tokoku</p>
              <p>All rights reserved</p>
            </div>
            <div>
              <h3 className="text-[25px] font-semibold">About</h3>
              <p>
                <a href="">Privacy Policy</a>
              </p>
              <p>
                <a href="">Help Center</a>
              </p>
              <p>
                <a href="">Terms & Condition</a>
              </p>
            </div>
            <div>
              <h3 className="text-[25px] font-semibold">Follow Us on</h3>
              <div className="flex flex-wrap justify-evenly">
                <Link to="#">
                  <AiOutlineFacebook size={30} />
                </Link>
                <Link to="#">
                  <AiOutlineTwitter size={30} />
                </Link>
                <Link to="#">
                  <AiOutlineInstagram size={30} />
                </Link>
                <Link to="#">
                  <AiOutlineYoutube size={30} />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-[25px] font-semibold mb-2 text-center">
                Download{" "}
                <span style={{ fontFamily: "Kaushan Script, cursivet" }}>
                  Tokoku
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                <Link to="#">
                  <button className="border-2 py-1 flex items-center flex-wrap gap-2 px-3 border-slate-600 rounded-md hover:bg-zinc-300 transition hover:scale-[0.99]">
                    <BiLogoPlayStore size={30} />
                    Play Store
                  </button>
                </Link>
                <Link to="#">
                  <button className="border-2 py-1 flex items-center flex-wrap gap-2 px-3 border-slate-600 rounded-md hover:bg-zinc-300 transition hover:scale-[0.99]">
                    <AiFillApple size={30} />
                    App Store
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  },
};

export default Footer;
