import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut, signOutError } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
import FetchSignOut from '../api/FetchSignOut'

const SignOut = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state.user)

  const handleSignOut = async () => {
    const result = await FetchSignOut('signout')
    console.log(result)
    if (result === 'failure') {
      dispatch(signOutError())
      return
    }
    dispatch(signOut())
    navigate('/')
  }
  return (
    <div className="min-h-80vh flex flex-col bg-dark min-h-screen">
      <button
        className="p-10 m-auto text-grey-fff my-4 w-36 p-2 text-lg font-bold bg-submit"
        type="button"
        onClick={handleSignOut}
      >
        Sign Out ?
      </button>
      <Link
        to="/"
        className="p-10 m-auto text-grey-fff my-4 w-36 p-2 text-lg font-bold bg-submit"
      >
        Cancel
      </Link>
      <p className="text-red-700 mt-5">{error ? 'Something went wrong' : ''}</p>
    </div>
  )
}

export default SignOut
