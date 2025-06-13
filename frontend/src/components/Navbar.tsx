import "../App.css";
import lightLogo from "/logo.svg";
import darkLogo from "/logo_darker.svg";
import { SlideTabsExample } from "./SlideTabs";
import { AnimatedButton } from "./Button";

function Navbar() {
    return (
        <nav className="bg-primary">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img src={lightLogo} className="h-8" alt="Light Hecate Logo" />
                
                {/* Access links */}
                <SlideTabsExample />

                {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded-sm md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded-sm md:p-0">Features</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded-sm md:p-0">Products</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded-sm md:p-0">Register</a>
                        </li>
                    </ul>
                </div> */}

                {/* Get in action button */}
                {/* <button className="bg-secondary text-primary">See Hecate in Action</button> */}
                <AnimatedButton children={"See Hecate in Action"} />

            </div>
        </nav>
    );
}

export default Navbar
