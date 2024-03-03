import { useSelector } from 'react-redux'
import arrow from '../assets/img/arrow-left-3099.png'

const Accounts = () => {
  const { defaultUserPage } = useSelector((state) => state.profile)
  return (
    <div>
      {/* SECTION 1 */}
      {defaultUserPage ? (
        <section
          className="bg-fff w-80pc m-auto p-24px box-border text-left mb-8
                    grid grid-cols-1 smpb:grid-cols-2"
        >
          <div className="flex-un smpb:flex-zero flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Checking (x8349)
            </h3>
            <p className="m-0 text-2.5rem">$2,082.79</p>
            <p className="m-0">Available Balance</p>
          </div>
          <div className="py-1 smpb:py-0 col-start-1 col-end-1 smpb:col-start-2 smpb:col-end-2 smpb:my-auto smpb:place-self-end">
            <button
              type="button"
              className="h-40px w-full smpb:w-220px text-1.1rem  shadow-xs
              font-bold bg-submit border-green-submit text-grey-fff"
            >
              View transactions
            </button>
          </div>
        </section>
      ) : (
        <section
          className="bg-zero w-80pc m-auto p-24px box-border text-left mb-8
                    grid grid-cols-2 items-center text-grey-fff"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Checking (x8349)
            </h3>
            <p className="m-0 text-2.5rem">$2,082.79</p>
            <p className="m-0">Available Balance</p>
          </div>
          <div className="col-start-2 my-auto place-self-end">
            <img src={arrow} alt="flèche" />
          </div>
        </section>
      )}
      {/* SECTION 2 */}
      {defaultUserPage ? (
        <section
          className="bg-fff w-80pc m-auto p-24px box-border text-left mb-8
          grid grid-cols-1 smpb:grid-cols-2"
        >
          <div className="flex-un smpb:flex-zero flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Savings (x6712)
            </h3>
            <p className="m-0 text-2.5rem">$10,928.42</p>
            <p className="m-0">Available Balance</p>
          </div>
          <div className="py-1 smpb:py-0 col-start-1 col-end-1 smpb:col-start-2 smpb:col-end-2 smpb:my-auto smpb:place-self-end">
            <button
              type="submit"
              className="h-40px w-full smpb:w-220px text-1.1rem  shadow-xs
              font-bold bg-submit border-green-submit text-grey-fff"
            >
              View transactions
            </button>
          </div>
        </section>
      ) : (
        <section
          className="bg-zero w-80pc m-auto p-24px box-border text-left mb-8
          grid grid-cols-2 items-center text-grey-fff"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Savings (x6712)
            </h3>
            <p className="m-0 text-2.5rem">$10,928.42</p>
            <p className="m-0">Available Balance</p>
          </div>
          <div className="col-start-2 my-auto place-self-end">
            <img src={arrow} alt="flèche" />
          </div>
        </section>
      )}
      {/* SECTION 3 */}
      {defaultUserPage ? (
        <section
          className="bg-fff w-80pc m-auto p-24px box-border text-left mb-8
          grid grid-cols-1 smpb:grid-cols-2"
        >
          <div className="flex-un smpb:flex-zero flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Credit Card (x8349)
            </h3>
            <p className="m-0 text-2.5rem">$184.30</p>
            <p className="m-0">Current Balance</p>
          </div>
          <div className="py-1 smpb:py-0 col-start-1 col-end-1 smpb:col-start-2 smpb:col-end-2 smpb:my-auto smpb:place-self-end">
            <button
              type="submit"
              className="h-40px w-full smpb:w-220px text-1.1rem  shadow-xs
              font-bold bg-submit border-green-submit text-grey-fff"
            >
              View transactions
            </button>
          </div>
        </section>
      ) : (
        <section
          className="bg-zero w-80pc m-auto p-24px box-border text-left mb-8
          grid grid-cols-2 items-center text-grey-fff"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Credit Card (x8349)
            </h3>
            <p className="m-0 text-2.5rem">$184.30</p>
            <p className="m-0">Current Balance</p>
          </div>
          <div className="col-start-2 my-auto place-self-end">
            <img src={arrow} alt="flèche" />
          </div>
        </section>
      )}
    </div>
  )
}

export default Accounts
