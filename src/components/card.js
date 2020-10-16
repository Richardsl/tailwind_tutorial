import React from "react"

//import star from "../img/star-full.svg"
import { Link } from "gatsby"

const Star = function Star(params) {
  let customClass = params.class
  customClass += " fill-current w-3 h-3"
  return (
    <svg
      class={customClass}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  )
}

export default function Card({ cost, stars, image }) {
  let starsArray = []
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsArray.push(<Star class="text-green-600" />)
    } else {
      starsArray.push(<Star class="text-gray-400" />)
    }
  }

  return (
    <div class="card min-w-32    border overflow-hidden bg-white  rounded ml-6 mt-6 shadow-sm">
      <div class="relative bg-teal-400 pb-1/2">
        <img class="absolute h-full w-full object-cover" src={image}></img>
      </div>
      <img class="h-48 w-full object-cover" src={image}></img>
      <div class="text-sm p-5 pt-3">
        <div class="flex items-baseline ">
          <span class="inline-block bg-teal-200 text-teal-800 rounded-full px-2 uppercase font-smaller text-xs">
            new
          </span>
          <div class="uppercase ml-2 text-xs font-semibold text-gray-600 tracking-wide">
            2 bed &bull; 4 baths
          </div>
        </div>

        <h4 class="font-bold mt-1 text-lg leading-tight truncate">
          Cozy cottage top of cozy cottage top of LA
        </h4>
        <div class="mt-2 font-semibold">
          ${cost}
          <span class="font-hairline text-sm"> /day</span>
        </div>
        <p class="text-sm leading-tight mt-2">
          Room available in this cozy LA aparmtnent, hosted by nice couple. LA
          aparmtnent, hosted by nice couple. LA aparmtnent, hosted by nice
          couple.
        </p>
        <div class="mt-2">
          <div
            class="flex items-center
          "
          >
            {starsArray}
            {/*<span class="text-green-500 font-semibold">
            {param.stars}/5 stars
        </span>*/}
            <span class="font-hairline text-sm ml-1 pb-1"> 32 reviews</span>
          </div>
        </div>
      </div>
    </div>
  )
}
