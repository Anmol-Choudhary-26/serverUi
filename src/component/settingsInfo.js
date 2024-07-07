import React from "react"
import "../styles/settingsInfo.css"
const options = (values) =>{
    const {name, value} = values.values
 
    return (
        <div className="optionsMenu">
            <div>{name}</div>
            <div>{value}</div>
        </div>
    )
}

export default options;