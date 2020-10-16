import React from "react"
import logo from "../img/logo.svg"
import beach_work_img from "../img/beach-work.jpg"
import { Link } from "gatsby"

export default function Page2() {
  return (
    <div class="lg:flex bg-gray-100 ">
      <div class="  lg:w-1/2">
        <div class=" sm:max-w-xl sm:mx-auto px-8 py-12 lg:px-12 lg:py-24 xl:ml-auto xl:mx-0 xl:max-w-lg">
          <img class="h-10" src={logo} alt="company logo" />
          <img
            class="mt-6 sm:mt-8 sm:h-64 sm:w-full rounded-lg shadow-xl sm:max-w-xl object-cover object-center lg:hidden "
            src={beach_work_img}
            alt="woman on park"
          />
          <h1 class="mt-6 sm:mt-8 text-2xl sm:text-4xl font-bold text-gray-800 leading-tight sm:leading-10">
            You can work from anywhere.
            <br />
            <span class="text-indigo-400"> Take advantage of it.</span>
          </h1>
          <p class="mt-2 sm:mt-4 text-gray-700 sm:text-base">
            Workstation helps you find nice beautifull rentals in great
            locations and weather even if you're not on vacation
          </p>
          <div class="mt-0">
            <Link
              class="mt-4 sm:mt-6 inline-block bg-indigo-600 uppercase tracking-wider text-white text-sm  py-3 px-5 hover:shadow-outline rounded-md font-bold "
              to="/"
            >
              Book your escape
            </Link>
          </div>
        </div>
      </div>
      <div class="relative hidden lg:block lg:w-1/2">
        <img
          class="absolute object-cover object-center h-full w-full inset-0"
          src={beach_work_img}
          alt="woman on park"
        />
      </div>
    </div>
  )
}
