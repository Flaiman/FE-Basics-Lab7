import React, { Component, createRef} from "react";

export default class Content extends Component{
    constructor(props){
        super(props);
        this.elemRef=createRef();
        this.elem1Ref = createRef();
    }
    color1=()=> {
        const elem = this.elemRef.current
        if (elem.style.color === "rgb(70, 130, 180)") {
            elem.style.color = "#F7DC6F"
            elem.style.background = "#2E4053"
        }
        else {
            elem.style.color = "#4682B4"
            elem.style.background = "#F0E68C"
        }
    }
    color2=()=> {
        const elem1 = this.elem1Ref.current
        if (elem1.style.color === "rgb(247, 220, 111)") {
            elem1.style.color = "#4682B4"
            elem1.style.background = "#F0E68C"
        }
        else {
            elem1.style.color = "#F7DC6F"
            elem1.style.background = "#2E4053"
        }
    }
    render(){
        return (
            <>
            <p>
        Народився 23 січня 2006 року у м. Генічеськ
    </p>
    <p>
        Навчався у Генічеському Ліцеї. Наразі у НТУУ "КПІ", м. Київ
    </p>
    <p>Хоббі:</p>
    <ul>
        <li>Музика</li>
        <li>Спорт</li>
        <li>Ігри</li>
    </ul>
    <p>Улюблені фільми:</p>
    <ol>
        <li>Гаррі Поттер(усі частини)</li>
        <li className="getid" ref={this.elemRef} onClick={this.color1}>Шерлок</li>
        <li className="querys" ref={this.elem1Ref} onClick={this.color2}>Гравіті Фолз</li>
        <li>Усі марвеловські шняги</li>
    </ol>
    <p>Ки́їв — столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині.
        Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр
        України. У системі адміністративно-територіального устрою України Київ має спеціальний статус, визначений
        Конституцією, і не входить до складу жодної області, хоча і є адміністративним центром Київської області</p>
            </>
        )
    }
}