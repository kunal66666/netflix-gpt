import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setSigninForm] = useState(true);

  const toggleSignInForm = () => {
    setSigninForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background-img" />
      </div>
      <form className="w-4/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-transparent border-2 border-white bg-cyan-700 bg-opacity-30"
          />
        )}
        
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-transparent border-2 border-white bg-cyan-700 bg-opacity-30"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent border-2 border-white bg-cyan-700 bg-opacity-30"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg cursor-pointer">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;