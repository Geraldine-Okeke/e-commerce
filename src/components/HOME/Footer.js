import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-black flex flex-col mt-20 pt-10 pb-2">
        <div className="flex flex-col md:flex-row bg-black text-white gap-6 pt-5 px-5 justify-between">
          <div className="flex flex-col gap-3 w-full md:w-1/5">
            <h1 className="font-bold text-xl">EXCLUSIVE</h1>
            <span>Subscribe</span>
            <span>Get 10% off your first order</span>
            <div className="relative  flex items-center border border-gray-300 rounded-md p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-2 py-1 text-black outline-none pr-10" // Add pr-10 for button spacing
              />
              <button
                className="absolute top-2 right-0  text-black px-3 py-1 rounded-md cursor-pointer"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-1/5">
            <h1 className="font-bold text-xl">SUPPORT</h1>
            <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
            <span>exclusive@gmail.com</span>
            <span>+88015-88888-9999</span>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-1/5">
            <h1 className="font-bold text-xl">ACCOUNT</h1>
            <span>My Account</span>
            <span>Login / Register</span>
            <span>Cart</span>
            <span>Wishlist</span>
            <span>Shop</span>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-1/5">
            <h1 className="font-bold text-xl">QUICK LINK</h1>
            <Link className="underline" to="">Privacy Policy</Link>
            <Link className="underline" to="">Terms Of Use</Link>
            <Link className="underline" to="">FAQ</Link>
            <Link className="underline" to="">Contact</Link>
          </div>
        </div>

        <div className="flex flex-row gap-1 mt-5 text-gray-300  justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            className="mb-2 md:mb-0"
          >
            <path
              d="M9.50002 18.3332C14.1024 18.3332 17.8334 14.6022 17.8334 9.99984C17.8334 5.39746 14.1024 1.6665 9.50002 1.6665C4.89765 1.6665 1.16669 5.39746 1.16669 9.99984C1.16669 14.6022 4.89765 18.3332 9.50002 18.3332Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8.14799C12 8.14799 10.9706 6.6665 9.25492 6.6665C7.53924 6.6665 6.16669 8.14799 6.16669 9.99984C6.16669 11.8517 7.53924 13.3332 9.25492 13.3332C10.9706 13.3332 12 11.8517 12 11.8517"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <small>Copyright Rimel 2022. All right reserved</small>
        </div>
      </div>
    </>
  );
}
