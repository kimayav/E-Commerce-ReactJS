import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assests/logo.png";
import axios from "axios";
import { useSelector } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?._id) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/register",
        formProps
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="#"
          className="flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="mr-2 pt-1" width="20%" src={logo} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ABC DEF"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Have an account yet?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
