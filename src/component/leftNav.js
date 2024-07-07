import React from "react";
import "../styles/leftNav.css"
import battleData from "../utils/modeData.js"
import BattleMode from "../component/battleMode.js"
import { Tooltip } from "react-tooltip";
function LeftNav() {
    const battlePartMode = battleData.map((battle) => {
        return (
            <BattleMode key={battle.id} battle={battle} />
        )

    })
    return (

        <div className="leftNavMain">
            <div className="mode">{battlePartMode}</div>
            <div className="imgIcon">  <img className="imgIcon" src='/play.svg' alt="React Logo" data-tooltip-id="tooltip id"
                data-tooltip-content="WATCH" />  <Tooltip id="tooltip id" /></div>
            <div className="imgIcon"> <img className="imgIcon" src='/news.svg' alt="React Logo" data-tooltip-id="tooltip id"
                data-tooltip-content="NEWS" />  <Tooltip id="tooltip id" /></div>
            <div className="sideItemMenu">
                <img className="helperIcon" src='/question.svg' alt="React Logo" />
                <img className="helperIcon" src='/logout.svg' alt="React Logo" />
            </div>


        </div>

    )
}

export default LeftNav;