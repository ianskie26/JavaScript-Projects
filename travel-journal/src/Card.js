import React from "react"

export default function Card(props) {
    return (
        <section className="container">
            <div className="card">
            <img src={`${props.item.imageUrl}`} className="card--image" />
            <div className="card--info">
                <div className="card--location">
                    <span><i class="fa fa-solid fa-map-pin"></i></span>
                    <span className="country">{props.item.location}</span>
                    <span><a target="_blank" href={`${props.item.googleMapsUrl}`}>View on Google Maps</a></span>
                </div>
                <h1>{props.item.title}</h1>
                <p><b>{props.item.startDate} - {props.item.endDate}</b></p>
                <p className="description">{props.item.description}</p>
                </div>
            </div>
            <hr />
        </section>
        
        
    )
}