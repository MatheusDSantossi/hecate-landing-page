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
        className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24 rounded-2xl text-center"
        style={{
          background:
            "radial-gradient(circle,rgba(255, 246, 41, 0.60) 0%, rgba(0, 46, 37, 0.40) 35%, rgba(0, 46, 37, 0.20) 100%)",
        }}
      >
        <h3 className="text-3xl font-medium md:text-4xl text-white text-center">
          Why Hecate?
        </h3>
        <p className="text-lg text-white md:text-xl mt-4 text-center">
          All the Intelligent Tools you Need for Seamless Customer Engagement
        </p>
        {/* Icon row */}
        <div className="mt-10 flex justify-center space-x-8">
            <img src={aiIcon} alt="AI bulb icon" />
            <img src={arrow} alt="Arrow" />
            <img src={support24h} alt="Support 24h icon" />
            <img src={happyIcon} alt="Happy face icon" />
            <img src={infoIcon} alt="Info icon" />
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
