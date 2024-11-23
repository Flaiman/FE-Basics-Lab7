import React, {useRef} from "react"
import KyivPic from '../images/Kiev.jpg'
import Catpic from '../images/img3.jpg'

export default function Image(){
    let img = document.createElement("img")
    img.src = Catpic
    img.alt = "cat"
    let originwidth = img.style.width = "300px";
    let originheight = img.style.height = "400px";
    const imgContainerRef = useRef(null);

    let addimage = () => {
        img.style.width=originwidth
        img.style.height=originheight
        imgContainerRef.current.appendChild(img);
    }
    let incscale = () =>{
        let currentwidth = img.clientWidth
        let currentheight = img.clientHeight
        img.style.width = (currentwidth * 1.2) + "px"
        img.style.height = (currentheight * 1.2) + "px"
    }
    let redscale = () => {
        let currentwidth = img.clientWidth
        let currentheight = img.clientHeight
        img.style.width = (currentwidth / 1.2) + "px"
        img.style.height = (currentheight / 1.2) + "px"
    }
    let delimage = () =>{
        img.remove()
    }

    return(
        <>
        <div className="img1">
            <div><a href="https://kyivcity.gov.ua" target="_blank" rel="noreferrer"><img src={KyivPic} width="300" height="400" alt="Фото Киева"></img></a></div>
            <div ref={imgContainerRef}></div>
        </div>
        <div>
            <button onClick={addimage}>ДОДАТИ</button>
            <button onClick={incscale}>ЗБІЛЬШИТИ</button>
            <button onClick={redscale}>ЗМЕНШИТИ</button>
            <button onClick={delimage}>ВИДАЛИТИ</button>
        </div>
        </>
    )
}

