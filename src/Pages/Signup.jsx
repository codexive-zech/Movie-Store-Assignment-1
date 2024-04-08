import { Link } from "react-router-dom";
import registerImg from "../assets/register.svg";
import { useState } from "react";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className=" grid lg:grid-cols-2 place-items-center m-0 ">
      <form className="my-10 md:my-0 p-3 flex flex-col gap-y-4 w-[95vw] mx-auto md:w-9/12 ">
        <h1 className=" text-2xl lg:text-3xl font-bold text-center mb-3 text-white">
          Hello! Create an Account
        </h1>
        <FormInput
          type="text"
          label="First Name"
          name="first_name"
          size="input-md"
        />
        <FormInput
          type="text"
          label="Last Name"
          name="last_name"
          size="input-md "
        />
        <FormInput type="email" label="Email" name="email" size="input-md" />
        <div className=" relative">
          <FormInput
            type={showPassword ? "text" : "password"}
            label="Password"
            name="password"
            size="input-md"
          />
          <span
            className=" absolute right-4 bottom-4 cursor-pointer text-secondary"
            onClick={handleShowPassword}
          >
            {showPassword ? (
              <AiTwotoneEyeInvisible size={20} />
            ) : (
              <AiTwotoneEye size={20} />
            )}
          </span>
        </div>
        <div className=" mt-3">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center font-semibold text-white">
          Already a Member?
          <Link
            to="/login"
            className=" text-[#BE123C] ml-2 "
            style={{ textDecorationLine: "none" }}
          >
            Login
          </Link>
        </p>
      </form>
      <div className=" hidden lg:flex items-center lg:justify-center lg:h-screen bg-[#BE123C] w-full">
        <img
          src={registerImg}
          alt="Register"
          className=" w-96 h-auto object-fit"
        />
      </div>
    </section>
  );
};

export default Signup;
