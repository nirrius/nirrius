import "babel-polyfill"
import "./index.styl"
import "./buttons.styl"

import favicon from "images/floppy.png"

import React from "react"
import ReactDOM from "react-dom"
import DesktopHandler from "./desktop/route-handler"

const link = Object.assign(document.createElement("link"), {
  href: favicon,
  rel: "shortcut icon",
  sizes: "70x70",
  type: "image/x-icon"
})

document.head.appendChild(link)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<DesktopHandler />, document.querySelector("main"))
})
