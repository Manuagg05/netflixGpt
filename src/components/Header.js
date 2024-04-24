import React ,{useEffect}from "react";
import {  signOut } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {  onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
const Header = () => {
const navigate = useNavigate()
const dispatch = useDispatch()


useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
        
      );
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  
return () => unsubscribe();
  
}, []);

const user = useSelector(store => store.user)


const signOUT=()=>{
  signOut(auth)
    .then(() => {
    
    })
    .catch((error) => {
      
    });
}
 
  return (
    <>
      <div className=" absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-52 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
        {user && <div className="flex ">
          <img
            className="w-8 h-8 my-8"
            src={user?.photoURL}
            alt="userImage"
          />
          <button onClick={signOUT} className="my-8 mx-1">SignOut</button>
        </div>}
      </div>
    </>
  );
  };

export default Header;
