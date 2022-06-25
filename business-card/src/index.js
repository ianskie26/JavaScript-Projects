import React from "react"
import ReactDOM from "react-dom/client"
import Info from "./Info"
import Main from "./Main"
import Footer from "./Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <div className="container">
        <Info />
        <Main />
        <Footer />
    </div>
)