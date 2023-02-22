import { useState } from "react"

export default function Colorize(){
    const [color, setColor]= useState("#6d0e0e")
    function changeColor (){
        console.log("color changed")
        const color = randomColor()
        setColor(color)
    }
    function randomColor(){
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return random;
    }
    return (

        <div className="colorizer">

            <div className="box" style={{backgroundColor: color}}>{color}</div> 
            <button onClick={changeColor}>Change Color</button>

        </div>
    )
}