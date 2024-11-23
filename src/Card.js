import React from "react";
import { Link } from "react-router-dom";
import GoodsCard from "./components/GoodsCard";
import images from "./images";
import './style.css';

function Card() {
    return <div className="Card">
        <GoodsCard name="Banana" price="15 UAH" image={images.banana}/>
        <GoodsCard name="Apple" price="20 UAH" image={images.apple}/>
        <GoodsCard name="Grape" price="17 UAH" image={images.grape}/>
        <GoodsCard name="Peach" price="40 UAH" image={images.peach}/>
        <GoodsCard name="Orange" price="25 UAH" image={images.orange}/>
        <GoodsCard name="Pomegranate" price="33 UAH" image={images.Pomegranate}/>
        <GoodsCard name="Strawberry" price="42 UAH" image={images.strawberry}/>
        <GoodsCard name="Dragon Fruit" price="96 UAH" image={images.dragon_fruit}/>
        <div className="link">
            <Link to="/">Page1</Link>
        </div>
      </div>;
  }
  
  export default Card;