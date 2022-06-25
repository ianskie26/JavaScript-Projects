import React from "react"

export default function Info() {
    return (
        <header className="info--container">
            <img src="./photo.png" alt="photo of Laura Smith" />
            <h1 className="info--name">Laura Smith</h1>
            <h2 className="info--job">Frontend Developer</h2>
            <p className="info--email">laurasmith.website</p>
            <button className="btn--email"><span><i class="fa fa-solid fa-envelope"></i></span>Email</button>
        </header>
    )
}