import TextAnimation from "./TextAnimation";
import cropped_logo from "/quote/cropped_logo.svg";
import quote from "/quote/quote.svg";

const Quote = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start content-between p-16 space-x-4">
      <div className="flex flex-col sm:flex-row md:items-center">
        <img className="w-30 md:w-40" src={cropped_logo} alt="Our logo cropped" />
        <h1 className="xs:text-4xl md:text-6xl md:pl-2 md:ml-4 text-white font-clash">
          <TextAnimation children={"“Where Your Goals Meet World-Class AI”"} />
        </h1>
      </div>
      <div className="pointer-events-none">
        <img className="md:w-30 md:-mt-2" src={quote} alt="Our logo cropped" />
      </div>
    </div>
  );
};

export default Quote;
