import TextAnimation from "./TextAnimation";
import cropped_logo from "/quote/cropped_logo.svg";
import quote from "/quote/quote.svg";

const Quote = () => {
  return (
    <div className="flex justify-center items-start content-between p-16 lg:ml-64 lg:mx-64 space-x-4">
      <div className="flex items-center">
        <img className="w-40" src={cropped_logo} alt="Our logo cropped" />
        <h1 className="text-xl md:text-2xl pl-2 ml-4 text-white font-clash">
          <TextAnimation children={"“Where Your Goals Meet World-Class AI”"} />
        </h1>
      </div>
      <div className="pointer-events-none">
        <img className="w-30 -mt-2" src={quote} alt="Our logo cropped" />
      </div>
    </div>
  );
};

export default Quote;
