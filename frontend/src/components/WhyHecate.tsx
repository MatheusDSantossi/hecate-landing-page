import robotPointing from "/huge_robot_hand_pointing.png";
import aiIcon from "/whyHecate/AI-icon.svg";
import arrow from "/whyHecate/Arrow.svg";
import happyIcon from "/whyHecate/happy-icon.svg";
import infoIcon from "/whyHecate/Info.svg";
import support24h from "/whyHecate/Support 24h.svg";

const WhyHecate = () => {
  return (
    <section id="why-hecate" className="relative pt-30 pb-32 overflow-hidden">
      {/* Gradient card */}
      <div
        className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:py-24 rounded-2xl text-center"
        style={{
          background:
            "radial-gradient(circle,rgba(255, 246, 41, 0.60) 0%, rgba(0, 46, 37, 0.60) 35%, rgba(0, 46, 37, 0.50) 100%)",
        }}
      >
        <h3 className="text-3xl font-medium md:text-4xl text-white text-center">
          Why Hecate?
        </h3>
        <p className="text-lg text-white md:text-xl mt-4 text-center">
          All the Intelligent Tools you Need for Seamless Customer Engagement
        </p>
        {/* Icon row */}
        <div className="relative w-full h-[150px] mt-10">
          {/* 1. Central AI bulb at the top center */}
          <img
            src={aiIcon}
            alt="AI bulb icon"
            className="absolute left-1/2 top-0 w-12 h-12 transform -translate-x-1/2"
          />
          {/* 2. Left icon (Support 24h) */}
          <img
            src={support24h}
            alt="Support 24h icon"
            className="absolute left-50 md:left-55 lg:left-65 top-23 w-6 h-6 transform -translate-x-1/2"
          />
          {/* 3. Right icon (Info) */}
          <img
            src={infoIcon}
            alt="Info icon"
            className="absolute right-45 md:right-50 lg:right-60 top-23 w-6 h-6 transform -translate-x-1/2"
          />
          {/* 4. Bottom icon (Happy face) */}
          <img
            src={happyIcon}
            alt="Happy face icon"
            className="absolute left-1/2 -bottom-3 w-6 h-6 transform -translate-x-1/2"
          />
          {/* 5. Arrows */}
          {/* Arrow pointing from bulb down to happy face */}
          <img
            src={arrow}
            alt="Arrow"
            className="absolute left-1/2 top-[4.2rem] w-15 h-10 transform -translate-x-1/2 rotate-90"
          />
          {/* Arrow from bulb to support (left) */}
          <img
            src={arrow}
            alt="Arrow left"
            className="absolute left-[33%] top-[3rem] w-15 h-10 transform rotate-150"
          />

          {/* Arrow from bulb to info (right) */}
          <img
            src={arrow}
            alt="Arrow right"
            className="absolute right-[33%] top-[3rem] w-15 h-10 transform rotate-30"
          />
        </div>
      </div>
      {/* Robot hand (clipped on small screens) */}
      <img
        className="hidden lg:block absolute top-1/2 -right-70 max-h-[190%] transform -translate-y-1/2 object-contain"
        src={robotPointing}
        alt="A robot hand pointing"
      />
    </section>
  );
};

export default WhyHecate;
