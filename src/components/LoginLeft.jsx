
import Logo from "../assets/logo.png";
import bgImage from "../assets/login_bg.png";

const LoginLeft = () => {
  return (
    <div className="max-lg:hidden w-full lg:w-1/2 relative overflow-hidden lg:h-auto">
      <div className="absolute inset-0 z-0 bg-gray-300">
        <img src={bgImage} alt="bgimg" className=" object-cover opacity-45" />
      </div>
      <div className="relative z-10 lg:flex items-center justify-center h-full">
        <img src={Logo} alt="Logo" className="w-20 h-20 lg:w-60 lg:h-60" />
      </div>
    </div>
  );
};

export default LoginLeft;
