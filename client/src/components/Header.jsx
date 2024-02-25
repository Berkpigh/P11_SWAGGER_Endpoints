import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import bankLogo from '../assets/img/argentBankLogo.png'
import bankLogo2 from '../assets/img/argentBankLogo2.png'
import userprofile from '../assets/img/userprofile.png'
import profileParams from '../assets/img/profileParams.png'
import deconnexion from '../assets/img/déconnexion.png'

const Header = () => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <React.Fragment>
      <nav className="ml-2 min-h-6vh max-h-10vh flex justify-between items-center mx-auto pt-1.5 pb-5">
        <Link to="/">
          {currentUser ? (
            <img
              className="max-w-full w-48"
              src={bankLogo2}
              alt="logo2 argentBankDB"
            />
          ) : (
            <img
              className="max-w-full w-48"
              src={bankLogo}
              alt="logo argentBankDB"
            />
          )}
        </Link>
        <div className="flex items-center">
          {currentUser ? (
            <div className="flex items-center">
              <Link to="/user" className="flex items-center mx-4">
                <span className="mx-4 text-lg text-bold text-green-500 hover:underline">
                  {currentUser.body.userName}
                </span>
                <img
                  className="w-16 h-8 "
                  src={profileParams}
                  alt="logo sign out"
                />
              </Link>
              <Link to="/signout" className="flex items-center mx-4">
                <img
                  className="w-8 h-8 inline"
                  src={deconnexion}
                  alt="profil utilisateur"
                />
              </Link>
            </div>
          ) : (
            <Link to="/login" className="flex items-center">
              <img
                className="w-6 h-6 "
                src={userprofile}
                alt="profile utilisateur"
              />
              <div className="mx-4">Sign In</div>
            </Link>
          )}
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header
