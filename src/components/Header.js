import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
const navigate=useNavigate();
const user = useSelector(store=>store.user);
  const handlesignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      { user && <div className="flex p-2">
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={togglePopup}
          >
            <img
              className="w-12 h-12"
              alt="usericon"
              // src={user.photoURL}
              src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            />
            <span className="ml-2 text-white">▼</span>
          </div>
          {showPopup && (
            <div className="absolute bg-black bg-opacity-80 rounded-md p-4 right-0 mt-2 text-white w-40">
              <button onClick={handlesignout} className="block w-full text-left hover:bg-gray-600 py-2 px-4 rounded-md">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
      }
    </div>
  );
};

export default Header;