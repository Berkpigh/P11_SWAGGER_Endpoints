import { useDispatch, useSelector } from 'react-redux'
import {
  profileDefaultPage,
  profileUpdatePage,
} from '../redux/user/profileSlice'
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from '../redux/user/userSlice'
import Accounts from '../components/Accounts'
import { useState } from 'react'
import FetchUpdateProfile from '../api/FetchUpdateProfile'
import Cookies from 'js-cookie'

const User = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState()
  const { currentUser, loading, error } = useSelector((state) => state.user)
  const { defaultUserPage } = useSelector((state) => state.profile)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = JSON.stringify(formData)
    const token = Cookies.get('mytoken')
    dispatch(updateUserStart())
    const result = await FetchUpdateProfile('Profile', token, data)
    console.log('result', result)
    if (result.status === 200) {
      dispatch(updateUserSuccess(result))
      dispatch(profileDefaultPage('user'))
    } else {
      dispatch(updateUserFailure(result))
    }
  }
  const handleUpdateProfile = () => {
    //setUorpProfile(false)
    dispatch(profileUpdatePage('profile'))
  }
  const handleCancelUpdateProfile = () => {
    dispatch(profileDefaultPage('user'))
  }
  return (
    <div>
      {defaultUserPage ? (
        <div className="min-h-80vh flex-1 bg-dark min-h-screen">
          <div className="text-grey-fff mb-8">
            <h1 className="block text-2em font-bold p-4">
              Welcome back
              <br />
              {currentUser.body.userName} !
            </h1>
            <button
              type="button"
              className="text-grey-fff my-4 w-auto p-2.5 text-lg font-bold bg-submit"
              onClick={handleUpdateProfile}
            >
              Edit Name
            </button>
          </div>
          <Accounts />
        </div>
      ) : (
        <div className="min-h-80vh flex-1 min-h-screen">
          <div className="">
            <div className="w-80  mx-auto p-2">
              <h1 className="my-4 text-2xl">Edit user info</h1>

              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex items-center text-left">
                  <label className="font-bold mr-2" htmlFor="userName">
                    User name:
                  </label>
                  <input
                    className=" rounded border-black border p-5px"
                    type="text"
                    placeholder={currentUser.body.userName}
                    id="userName"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center text-left">
                  <label className="font-bold mr-2" htmlFor="firstName">
                    First name:
                  </label>
                  <input
                    className="rounded border-black border p-5px bg-gray-200"
                    type="text"
                    placeholder={currentUser.body.firstName}
                    id="firstName"
                    readOnly
                  />
                </div>
                <div className="flex items-center text-left">
                  <label className="font-bold mr-2" htmlFor="lastName">
                    Last name:
                  </label>
                  <input
                    className="rounded border-black border p-5px  bg-gray-200"
                    type="text"
                    placeholder={currentUser.body.lastName}
                    id="lastName"
                    readOnly
                  />
                </div>
                <div className="flex justify-between w-80">
                  <button
                    type="submit"
                    className="rounded text-grey-fff my-4 w-full p-2 text-lg font-bold bg-submit mr-1"
                  >
                    {loading ? 'Loading...' : 'Save'}
                  </button>
                  <button
                    className="ml-1 rounded text-grey-fff my-4 w-full p-2 text-lg font-bold bg-submit"
                    onClick={handleCancelUpdateProfile}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <p className="text-red-700 mt-5">
              {error && 'Une erreur est survenue !'}
            </p>
          </div>
          <Accounts />
        </div>
      )}
    </div>
  )
}
export default User
