import { useRef, useState } from "react";
import Header from "./Header";
import { checkSignupData, checkValidData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
const Login = () => {
  const [isSigninForm, setSigninForm] = useState(true);
  const [errorMessage,seterromessgae]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);
const handlebutotnclick = () => {
    let msg;
    if (isSigninForm) {
      // Validate the login form data
       msg = checkValidData(email.current.value, password.current.value);
      seterromessgae(msg);
    } else {
      // Validate the signup form data
       msg = checkSignupData(name.current.value, email.current.value, password.current.value);
      seterromessgae(msg);
    }
 
     if(msg)return; //if msg is present that mena serror is coming so return dont signup or login
 // then only sign in or signup 
    if(!isSigninForm){
            //   not sign in means 
          
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up logic
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/65844179?v=4"
    }).then(() => {
      // Profile updated!
      // ...
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
   
      navigate('/browse')
    }).catch((error) => {
      seterromessgae(error.message);
      // An error occurred
      // ...
    });
    // console.log(user);
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterromessgae(errorCode+"-"+errorMessage)
    // ..
  });
//   signup form 
            // so signup logic here
    }else{
        // here i will write signin logic

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate('/browse')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterromessgae(errorCode+"-"+errorMessage)
  });


    }
   
  };
  const toggleSignInForm = () => {
    setSigninForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background-img" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
        {!isSigninForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-transparent border-2 border-white bg-cyan-700 bg-opacity-30"
          />
        )}
        
        <input
           ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-transparent border-2 border-white bg-cyan-700 bg-opacity-30"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent border-2 border-white bg-cyan-700 bg-opacity-30"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg cursor-pointer "
        
        onClick={handlebutotnclick}>
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