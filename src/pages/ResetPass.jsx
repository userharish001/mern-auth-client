import React from "react";
import { Link } from "react-router-dom";

const ResetPass = () => {
  return <div className="flex flex-row justify-center items-center h-screen">
        <div
          style={{
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-center text-2xl font-extrabold text-white">
              Reset your password
            </h2>
            <form method="POST" action="#" className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email address
                  </label>
                  <input
                    placeholder="Email address"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    required
                    autoComplete="email"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="mt-4 mb-4">
                <label className="sr-only" htmlFor="otp">
                  Enter Otp:
                </label>
                <input
                  placeholder="enter received otp"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  required
                  autoComplete="current-password"
                  type="text"
                  name="otp"
                  id="otp"
                />
              </div>
              <div className="mt-4 mb-4">
                <label className="sr-only" htmlFor="password">
                  Name :
                </label>
                <input
                  placeholder="new password"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  required
                  autoComplete="current-password"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              </div>
  
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                  />
                  <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <Link to={'/resetpassword'}
                    className="font-medium text-indigo-500 hover:text-indigo-400"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
  
              <div>
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Don't have an account?</span>
            <a
              className="font-medium text-indigo-500 hover:text-indigo-400"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
  }

export default ResetPass;
