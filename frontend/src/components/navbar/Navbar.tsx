import "../../App.css";
import lightLogo from "/logo.svg";
import darkLogo from "/logo_darker.svg";
import { SlideTabsExample } from "./SlideTabs";
import { AnimatedButton } from "./Button";
import NavMenu from "./NavMenu";

function Navbar() {
  const isDarkMode = window.matchMedia("(prefers-color-sheme: dark)").matches;

  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={lightLogo} className="h-14" alt="Light Hecate Logo" />
        {/* {isDarkMode ? (
        <img src={darkLogo} className="h-10" alt="Light Hecate Logo" />
      ) : (
          <img src={lightLogo} className="h-10" alt="Light Hecate Logo" />
        )} */}
        {/* Access links */}
        <div className="hidden md:grid place-content-center">
          <SlideTabsExample bgColor="bg-primary" />
        </div>
        <div className="hidden md:grid place-content-center z-20">
          <AnimatedButton children={"See Hecate in Action"} />
        </div>

        <NavMenu />
      </div>
    </nav>
  );
}

export default Navbar;
