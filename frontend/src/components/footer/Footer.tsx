import ShinyLine from "../ourFeatures/ShinyLine";
import logo_darker from "/logo_darker.svg";
import copyright from "/footer/Copyright.svg";
import { Options } from "../../utils/FooterOptions";

const Footer = () => {
  return (
    <div>
      <ShinyLine />
      <div className="bg-secondary pb-8">
        <div className="flex align-bottom items-end p-12 mt-10">
          <img
            className="h-20"
            src={logo_darker}
            alt="Hecate logo green color"
          />
          <div className="flex items-center">
            <img
              className="h-4 ml-4 mr-1"
              src={copyright}
              alt="Copyright Icon"
            />
            <h2 className=" font-clash font-medium text-primary">2025</h2>
          </div>
        </div>
        <div className="">
          {Options.map(({ title, option1, option2, option3 }) => (
            <div className="flex text-primary">
              <h2 className="font-medium">{title}</h2>
              <h3>{option1}</h3>
              <h3>{option2}</h3>
              <h3>{option3}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
