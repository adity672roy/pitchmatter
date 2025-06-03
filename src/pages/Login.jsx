import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import RightLogo from "../assets/right_logo.png";
import Logo from "../assets/logo.png";
import bgImage from "../assets/login_bg.png";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...form, remember });
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 relative overflow-hidden">
        <div className="absolute z-0 bg-gray-300">
          <img src={bgImage} alt="" className="opacity-45 " />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <img src={Logo} alt="Logo" className="w-60 h-60 " />
        </div>
      </div>

      {/* Right */}
      <div className="relative w-1/2 flex items-center justify-center ">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-2">
            <img src={RightLogo} alt="logo" className="w-80" />
          </div>
          <p className="text-gray-600 mb-10 text-lg font-semibold">FundBoost Hub</p>

          <h2 className="text-3xl font-semibold mb-1">Welcome back!</h2>
          <p className=" text-gray-800 mb-10">
            Please enter your credentials to sign in!
          </p>

          <Input
            label="Email/Username"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your username or email"
          />

          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            icon={
              showPassword ? (
                <FiEyeOff size={16} onClick={togglePasswordVisibility} />
              ) : (
                <FiEye size={16} onClick={togglePasswordVisibility} />
              )
            }
          />

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className=""
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text hover:underline">
              Forgot password?
            </a>
          </div>

          <Button type="submit">Login</Button>
        </form>

        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-center text-zinc-500 font-semibold">
          COPYRIGHT ©2025 Pitchmatter, All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
