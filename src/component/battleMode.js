import React from "react";
import "../styles/battleMode.css"

function battleMode({battle}){
    return (
        
            <img className="img" src={battle.img} alt={battle.name} />
       
    )
}

export default battleMode;