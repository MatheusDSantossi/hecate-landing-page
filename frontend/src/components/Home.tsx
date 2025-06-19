import robot from "/robot_image.png";
import computer from "/MacBook Air (15 inch).png";

const Home = () => {
  return (
    <div className="relative flex items-center justify-center bg-primary shadow-2xl">
      {/* Left-side robot image */}
      <img className="hidden md:block h-[500px] object-contain -ml-25" src={robot} alt="A robot" />

      {/* Hero text */}
      <div className="flex z-10 py-8 
       justify-center text-center max-w-xl md:px-4 md:mr-[300px]">
        <h1 className="text-white font-medium text-sm xs:text-xl md:text-5xl lg:text-9xl leading-tight font-clash">
          Elevate Your Business with{" "}
          <span className="text-secondary">AI-Powered</span> {' '} Conversations
        </h1>
      </div>

      {/* Right-side laptop image */}
      <img
        className="hidden md:block absolute right-0 h-[700px] object-contain mt-10"
        src={computer}
        alt="A macbook showing the initial screen of the Chatbot Hecate"
      />
    </div>
  );
};

export default Home;
