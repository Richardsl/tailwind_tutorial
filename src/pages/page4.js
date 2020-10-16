import React from "react"
import Card from "../components/card.js"
import { Link } from "gatsby"
import untitled from "../img/Untitled-1.jpg"
import untitled2 from "../img/Untitled-2.jpg"
import richard from "../img/richardKjokken.jpg"

export default function Page4() {
  return (
    <div class="card-container flex justify-items-start">
      <Card cost="445" stars="5" image={untitled}></Card>
      <Card cost="231" stars="1" image={untitled2}></Card>
      <Card cost="445" stars="4" image={richard}></Card>
    </div>
  )
}
