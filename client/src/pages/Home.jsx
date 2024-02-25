import React from 'react'
import { useDispatch } from 'react-redux'
import iconchat from '../assets/img/icon-chat.png'
import iconmoney from '../assets/img/icon-money.png'
import iconsecurity from '../assets/img/icon-security.png'

import { profileDefaultPage } from '../redux/user/profileSlice'

const Home = () => {
  const dispatch = useDispatch()
  dispatch(profileDefaultPage('user'))
  return (
    <React.Fragment>
      {/* MAIN */}
      <div className="min-h-80vh">
        {/* Hero */}
        <div className="min-h-55vh h-300px mdpb:h-400px bg-[0_-50px] mdpb:bg-[0_33%] bg-hero object-cover bg-cover bg-no-repeat relative">
          {/* Hero-content */}
          <div className="relative mdpb:absolute inset-y-8 mdpb:top-[50px] mdpb:right-[50px] w-250px mdpb:w-364px mdpb:h-211px  p-8  text-left bg-white mx-auto mr-auto mdpb:m-8">
            {/* <h2 className="sr-only">Promoted Content</h2> */}
            <p className="font-bold text-[1rem] mdpb:text-[1.5rem] leading-tight m-0">
              No fees.
            </p>
            <p className="font-bold text-[1rem] mdpb:text-[1.5rem] leading-tight m-0">
              No minimum deposit.
            </p>
            <p className="font-bold text-[1rem] mdpb:text-[1.5rem] leading-tight m-0">
              High interest rates.
            </p>
            <p className="mb-0 text-0.9rem mdpb:text-1.2rem leading-tight mt-4">
              Open a savings account with Argent Bank today!
            </p>
          </div>
        </div>
        <section className="grid mdpb:grid-cols-3 grid-cols-1">
          {/* <h2 className="sr-only">Features</h2> */}
          <div className="p-10">
            <img
              src={iconchat}
              alt="Icône de chat"
              className="m-auto w-100px border-8 border-solid border-green-feature rounded-full p-4"
            />
            <h3 className="text-grey-222 text-xl font-bold mb-2">
              You are our #1 priority
            </h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="p-10">
            <img
              src={iconmoney}
              alt="Icône de monnaie"
              className="m-auto w-100px border-8 border-solid border-green-feature rounded-full p-4"
            />
            <h3 className="text-grey-222 text-xl font-bold mb-2">
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="p-10">
            <img
              src={iconsecurity}
              alt="Icône de paier valeur"
              className="m-auto w-100px border-8 border-solid border-green-feature rounded-full p-4"
            />
            <h3 className="text-grey-222 text-xl font-bold mb-2">
              Security you can trust
            </h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Home
