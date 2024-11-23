import React from "react"

export default function GoodsCard(props){
    return(
        <div className="GoodsCard">
            <img className="img2" src={props.image} alt="FruitImage" />
            <h2>{props.name}</h2>
            <p className="price">{props.price}</p>
        </div>
    )
}
