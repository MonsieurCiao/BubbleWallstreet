import React, {useEffect, useState } from "react";
import "./Upgrades.css";
import Unicorn from "./upgrades/Unicorn";
import Otto from "./upgrades/Otto";
import Farm from "./upgrades/Farm";
import Autoclicker from "./upgrades/Autoclicker";
import Mine from "./upgrades/Mine";
import Factory from "./upgrades/Factory";
import Bank from "./upgrades/Bank";
import Temple from "./upgrades/Temple";

function Upgrades({buyUpgrade, score}){
    useEffect(()=>{

    },[])

    return(
        <div className="upgrades">
            <ul className="upgrades-list">
                <li id="upgrade" className="upgrade"><Autoclicker buyUpgrade={buyUpgrade} score={score}/></li>
                <li id="upgrade" className="upgrade"><Otto buyUpgrade={buyUpgrade} score={score}/></li>
                <li id="upgrade" className="upgrade"><Farm buyUpgrade={buyUpgrade} score={score}/></li>
                <li id="upgrade" className="upgrade"><Mine buyUpgrade={buyUpgrade} score={score}/></li>
                <li id="upgrade" className="upgrade"><Factory buyUpgrade={buyUpgrade} score={score}/></li>
                <li id="upgrade" className="upgrade"><Bank buyUpgrade={buyUpgrade} score={score}/></li>
                <li id="upgrade" className="upgrade"><Temple buyUpgrade={buyUpgrade} score={score}/></li>
                <li id="upgrade" className="upgrade"><Unicorn buyUpgrade={buyUpgrade} score={score}/></li>
               
            </ul>
        </div>
    );
}
export default Upgrades;