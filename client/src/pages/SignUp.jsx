import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import userprofile from '../assets/img/userprofile.png'
import FetchSignUp from '../api/FetchSignUp'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = JSON.stringify(formData)
    //console.log(data)
    setLoading(true)
    setError(false)
    const result = await FetchSignUp('signup', data)
    console.log('result', result)
    setLoading(false)
    if (result.status === 200) {
      navigate('/login')
    } else {
      console.log(result)
      setError(true)
    }
  }
  return (
    <div className="min-h-80vh flex-1 bg-dark min-h-screen">
      <div className="p-10">
        <div className="box-border border bg-white w-300px  mx-auto p-8 ">
          <img
            className="w-6 h-6 m-auto"
            src={userprofile}
            alt="profile utilisateur"
          />
          <h1 className="my-4">Sign Up</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="border-black border p-5px"
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
                className="border-black border p-5px"
                type="text"
                id="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="firstname">
                First Name
              </label>
              <input
                className="border-black border p-5px"
                type="text"
                id="firstName"
                placeholder="First Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="border-black border p-5px"
                type="text"
                id="lastName"
                placeholder="Last Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="username">
                User Name
              </label>
              <input
                className="border-black border p-5px"
                type="text"
                id="userName"
                placeholder="User Name"
                required
                onChange={handleChange}
              />
            </div>
            <button className="text-grey-fff my-4 w-full p-2 text-lg font-bold bg-submit">
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center m-auto mt-3">
        <p className="text-white">Have an account ?</p>
        <Link to="/login">
          <span className="p-2 border text-lg font-bold bg-submit ml-2 text-white">
            Login
          </span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">
        {error && 'Une erreur est survenue !'}
      </p>
    </div>
  )
}

export default SignUp
