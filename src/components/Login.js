import React ,{useState,useRef} from "react";
import Header from "./Header"
import { ValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../utils/Firebase"
import {  updateProfile } from "firebase/auth";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

const [isSignInForm , setIsSignInForm] = useState(true)
const [errorMessage, setErrorMessage] = useState("")
const [hidePassword,setHidePassword] = useState(true)


const onToggle = ()=>{
setIsSignInForm(!isSignInForm)
}

const email = useRef(null)
const password = useRef(null) 
 const username = useRef(null); 
//  const confirmPassword = useRef(null); 


const handleSubmit=()=>{

  const message = ValidateData(
    email.current.value,
    password.current.value,
    // confirmPassword.current.value,
    // username.current.value
  );
  

 setErrorMessage(message)
 if(message)return


 if(!isSignInForm)
 {
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    updateProfile(user, {
      displayName: username.current.value,
      photoURL: "https://avatars.githubusercontent.com/u/95232705?v=4",
    })
      .then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

      })
      .catch((error) => {
        setErrorMessage(error);
      });
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage)
  });

 }
 else {
   signInWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
       // Signed in
       const user = userCredential.user;


       
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
setErrorMessage(errorCode + "-" + errorMessage);
     });

 }
  
}

const togglePassword=()=>{
setHidePassword(!hidePassword)
}


  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 bg-black my-56 mx-auto right-0 left-0 p-12 text-white flex flex-col bg-opacity-70 rounded-lg "
      >
        <div className="my-4">
          <h1 className="text-4xl">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
        </div>
        {!isSignInForm && (
          <input
            ref={username}
            type="text"
            name="username"
            placeholder="Username"
            className="py-4 px-2 mx-0.5 my-3 bg-gray-800 "
          />
        )}
        <input
          ref={email}
          type="text"
          name="Email"
          placeholder="Email or phone number"
          className="py-4 px-2 mx-0.5 my-3 bg-gray-800 focus:outline-none"
        />
        <div className="py-4 px-2 mx-0.5 my-3 bg-gray-800 flex justify-between">
          <input
            ref={password}
            type={hidePassword ? "password" : "text"}
            name="password"
            placeholder={isSignInForm ? "Password" : " New Password"}
            className=" bg-gray-800 focus:outline-none w- w-80  "
            autocomplete="off"
          />
          <button onClick={togglePassword}>{hidePassword ? "🫣" : "👀"}</button>
        </div>

        {/* {!isSignInForm && (
          <input
            // ref={confirmPassword}
            type="password"
            name="Confirm Password"
            placeholder="Confirm Password"
            className="py-4 px-2 mx-0.5 my-3 bg-gray-800"
          />
        )} */}

        <p className="text-red-600 mx-2">{errorMessage}</p>
        <button
          className="p-4 m-4 bg-red-600 mx-0.5 cursor-pointer"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={onToggle}>
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already a user ? Sign In "}
        </p>
      </form>
    </div>
  );
};

export default Login;
