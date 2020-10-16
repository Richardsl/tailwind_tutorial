import React from "react"
import logo from "../img/logo.svg"
import beach_work_img from "../img/beach-work.jpg"
import { Link } from "gatsby"

export default function Page1() {
  return (
    <div class="px-8 py-12 max-w-md mx-auto bg-green-500 xl:bg-red-500">
      <img class="h-10" src={logo} alt="company logo" />
      <img
        class="mt-6 rounded-lg shadow-xl"
        src={beach_work_img}
        alt="woman on park"
      />
      <h1 class="mt-6 text-2xl font-bold text-gray-800 leading-tight">
        You can work from anywhere.
        <br class="md:hidden" />
        <span class="text-indigo-400"> Take advantage of it.</span>
      </h1>
      <p class="mt-2 text-gray-700">
        Workstation helps you find nice beautifull rentals in great locations
        and weather even if you're not on vacation
      </p>
      <div class="mt-0">
        <Link
          class="mt-5 inline-block bg-indigo-600 uppercase tracking-wider text-white text-sm py-3 px-5 hover:shadow-outline rounded-md font-bold "
          to="/"
        >
          Book your escape
        </Link>
      </div>
    </div>
  )
}
