import React ,{useState} from "react";
import Header from "./Header"
const Login = () => {

const [isSignInForm , setIsSignInForm] = useState(true)
const onToggle = ()=>{
setIsSignInForm(!isSignInForm)
}


  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
      <form className=" absolute w-3/12 bg-black my-56 mx-auto right-0 left-0 p-12 text-white flex flex-col bg-opacity-70 rounded-lg ">
        <div className="my-4">
          <h1 className="text-4xl">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
        </div>
        {!isSignInForm && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="py-4 px-2 mx-0.5 my-3 bg-gray-800 "
          />
        )}
        <input
          type="text"
          name="Email"
          placeholder="Email or phone number"
          className="py-4 px-2 mx-0.5 my-3 bg-gray-800 "
        />
        <input
          type="password"
          name="password"
          placeholder={isSignInForm ? "Password" : " New Password"}
          className="py-4 px-2 mx-0.5 my-3 bg-gray-800"
        />
        {!isSignInForm && (
          <input
            type="password"
            name="Confirm Password"
            placeholder="Confirm Password"
            className="py-4 px-2 mx-0.5 my-3 bg-gray-800"
          />
        )}
        <button className="p-4 m-4 bg-red-600 mx-0.5 cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={onToggle}>{isSignInForm? "New to Netflix ? Sign Up" : "Already a user ? Sign In "}</p>
      </form>
    </div>
  );
};

export default Login;
