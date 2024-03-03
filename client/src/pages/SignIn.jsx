import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  signInInitial,
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice'
import Cookies from 'js-cookie'

import userprofile from '../assets/img/userprofile.png'
import FetchLogin from '../api/FetchLogin'
import FetchGetProfile from '../api/FetchGetProfile'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector((state) => state.user)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signInInitial(null))
    dispatch(signInStart())

    let token = ''
    const data = JSON.stringify(formData)
    const resdata = await FetchLogin('login', data)
    if (resdata.status !== 200) {
      dispatch(signInFailure())
      //console.log(error, error.message)
      console.log(resdata.status, resdata.message)
    } else {
      token = resdata.body.token
      if (token !== '') {
        //console.log(token)
        Cookies.set('mytoken', token, { expires: 1, secure: false })
        handleGetProfile(token)
      }
    }
  }

  const handleGetProfile = async (token) => {
    const result = await FetchGetProfile('profile', token)
    //console.log('result', result)
    if (result.status === 200) {
      dispatch(signInSuccess(result))
      navigate('/')
    } else {
      dispatch(signInFailure())
    }
  }
  return (
    <div className="min-h-80vh flex-1 bg-dark min-h-screen">
      <div className="p-2.5rem">
        <div className="box-border border bg-fff w-300px  mx-auto p-2rem">
          <img
            className="w-30px m-auto"
            src={userprofile}
            alt="profile utilisateur"
          />
          <h1 className="my-4">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="border-zero border-1px p-5px"
                type="email"
                id="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <input
                className="border-zero border-1px p-5px"
                type="password"
                id="password"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <input className="" type="checkbox" id="remember-me" />
              <label className="mx-1" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="text-grey-fff my-4 w-250px p-demirem text-lg font-bold bg-submit"
            >
              {loading ? 'Loading' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center m-auto mt-3">
        <p className="text-grey-fff">Dont have an account ?</p>
        <Link to="/signup">
          <span className="p-demirem border text-lg font-bold bg-submit ml-2 text-grey-fff">
            Sign Up
          </span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">
        {error ? error.message || 'Incorrect email/password !' : ''}
      </p>
    </div>
  )
}
export default SignIn
