import React, { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../utils/userSlice';
import { AVATAR, LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const user = useSelector((store) => store.user);
  const showGptSearch= useSelector((store)=>store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
   const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, we can get uid, email, displayName, and photoURL
        const { uid, email, displayName, photoURL } = user;
        dispatch(adduser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeuser());
        navigate('/');
      }
    });
    // unsubscribr will be called when copmponent didi mount
    return ()=> unsubscribe();
  }, []);

  const handleGptsearchclick=()=>{
    // togggle gpt search button
    dispatch(toggleGptSearchView());
  }

  const handlelangaugechnage=(e)=>{
   dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
       
          <div className="relative flex">
  {showGptSearch &&
   (       <select className='p-2 bg-gray-800 text-white m-2' onChange={handlelangaugechnage}>
          {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
          </select>
    ) }     <button className='py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white'
            
            onClick={handleGptsearchclick}
            >
          {showGptSearch? "Homepage":"Search"}
        </button>
            <div className="flex items-center cursor-pointer" onClick={togglePopup}>
             
    
              <img
                className="w-12 h-12"
                alt="usericon"
                src={user.photoURL || AVATAR}/>
              <span className="ml-2 text-white">▼</span>
            </div>
            {showPopup && (
              <div className="absolute bg-black bg-opacity-80 rounded-md p-4 right-0 mt-2 text-white w-40">
                <p className="mb-2">{user.displayName}</p>
                <button onClick={handleSignOut} className="block w-full text-left hover:bg-gray-600 py-2 px-4 rounded-md">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;