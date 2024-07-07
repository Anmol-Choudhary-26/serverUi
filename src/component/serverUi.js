import React from "react";
import "../styles/serverUi.css";
import settingsData from '../utils/settingsData.js';
import SettingsInfo from "../component/settingsInfo.js"
import advanceData from "../utils/advancedData.js"
import rules from '../utils/ruleData.js'
import Map from "../component/map.js"
import mapData from "../utils/mapData.js"
function serverUi() {
    const renderedOptions = settingsData.map((items, index) => {
        return (
            <SettingsInfo key={index} values={items} />
        )
    })

    const renderAdvanceSettings = advanceData.map((items, index) => {
        return (
            <SettingsInfo key={index} values={items} />
        )
    })
    const renderRule = rules.map((items, index) => {
        return (
            <SettingsInfo key={index} values={items} />
        )
    })
    const renderedMap = mapData.map((item) =>{
        return (
            <Map key={item.id} map={item} />
        )
    })

    return (
        <div className="serverUiMain">
            <div><h1>!RC3-BASEMAPS </h1></div>
            <div>
                <h5> map CONQUEST LARGE  -  LANCANG DAM  -  CUSTOM  -  60 HZ </h5>
            </div>
            <div className="antiCheat"><h5>Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d </h5></div>
            <div className="playButtons">
                <button className="buttonICON"><b>PLAY</b></button>
                <button className="buttonICON"><b>SPECTATE</b></button>
                <button className="buttonICON"><b>JOIN AS COMMANDER</b></button>
                <button className="startButton"><img className="starICON" src="/startICON.svg" alt="star" /><b>13672</b></button>
            </div>

            <div className="serverStat">
                <div>
                    <div>PLAYERS</div>
                    <div>60/64</div>
                </div>
                <div>
                    <div>PING</div>
                    <div>104ms</div>
                </div>
                <div>
                    <div>TICKRATE</div>
                    <div>60 Hz</div>
                </div>
            </div>
            <div className="settingsNrules">
                <div className="settings">
                    <div> SETTINGS</div>
                    {renderedOptions}
                </div>
                <div className="settings">
                    <div>ADVANCED</div>
                    {renderAdvanceSettings}
                </div>
                <div className="settings">
                   <div>RULES</div> 
                   {renderRule}
                </div>
            </div>
<div>  
    <div className="mapDiv">MAP ROTATION</div>
   <div className="renderDiv">{renderedMap}</div> 
    </div>
           

        </div>
    )
}

export default serverUi;