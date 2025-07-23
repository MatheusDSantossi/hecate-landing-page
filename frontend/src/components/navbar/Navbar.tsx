import "../../App.css";
import lightLogo from "/logo.svg";
import { AnimatedButton } from "./Button";
import NavMenu from "./NavMenu";
import { memo } from "react";

function Navbar() {
  // const isDarkMode = window.matchMedia("(prefers-color-sheme: dark)").matches;

  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:ml-26 md:ml-8 sm:ml-10 p-4">
        <img src={lightLogo} className="h-12 lg:h-14" alt="Light Hecate Logo" />
        {/* {isDarkMode ? (
        <img src={darkLogo} className="h-10" alt="Light Hecate Logo" />
      ) : (
          <img src={lightLogo} className="h-10" alt="Light Hecate Logo" />
        )} */}
        {/* Access links */}
        {/* <div className="hidden lg:grid place-content-center">
          <SlideTabsExample bgColor="bg-primary" />
        </div> */}
        <div className="hidden md:inline-block relative md:mr-4 lg:mr-0 z-20">
          <AnimatedButton children={"See Hecate in Action"} />
        </div>

        <NavMenu />
      </div>
    </nav>
  );
}

export default memo(Navbar);
