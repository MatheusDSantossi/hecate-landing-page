import robot from "../../public/robot_image.png";
import computer from "../../public/MacBook Air (15 inch).png";

const Home = () => {
  return (
    <div className="flex items-cente justify-center bg-primary shadow-2xl">
        <img className="hidden md:block h-[500px]" src={robot} alt="A robot" />
        <div className="flex items-center justify-center">
            <h1 className="text-white font-medium text-3xl">Elevate Your Business with <span className="text-secondary">AI-Powered</span> Conversations</h1>
        </div>
        <img className="absolute hidden md:block h-[700px] ml-96" src={computer} alt="A macbook showing the initial screen of the Chatbot Hecate" />
    </div>
  )
}

export default Home