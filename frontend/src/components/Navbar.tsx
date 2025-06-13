import "../App.css";
import lightLogo from "/logo.svg";
import darkLogo from "/logo_darker.svg";
import { SlideTabsExample } from "./SlideTabs";
import { AnimatedButton } from "./Button";
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={lightLogo} className="h-8" alt="Light Hecate Logo" />
        <button
          data-collapse-toggle="navbar-default"
          className="inline-flex items-center p-2 w-11 h-11 justify-center text-sm rounded-lg cursor-pointer md:hidden hover:bg-primary-dark focus:outline-none focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main Menu</span>
          <MdOutlineMenu className="w-10 h-10 text-secondary" />
        </button>

        {/* Access links */}
        <SlideTabsExample />

        <AnimatedButton children={"See Hecate in Action"} />
      </div>
    </nav>
  );
}

export default Navbar;
