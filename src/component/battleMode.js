import React from "react";
import "../styles/battleMode.css"
import { Tooltip } from "react-tooltip";


function battleMode({battle}){
    return (
        <>
            <img 
            className="img"
             src={battle.img}
              alt={battle.name}
              data-tooltip-id="tooltip id"
              data-tooltip-content={battle.name} 
              />
              <Tooltip id ="tooltip id"/>
              </>
    )
}

export default battleMode;