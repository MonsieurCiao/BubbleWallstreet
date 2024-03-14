import React, { useState,useCallback } from "react";
import "./Upgrade.css";


function Unicorn({ buyUpgrade, score }) {
    const [price, setPrice] = useState(330000000);
    const [isActive, setIsActive] = useState(false);
    const [upgradesAquired, setUpgradesAquired] = useState(135);
    const increasePerSec = 44000;

    const handleBuy = useCallback(() => {
        if (score >= price) {
            
            buyUpgrade(price, increasePerSec);
            setPrice(Math.round(18.0007 * Math.exp(0.1245 * upgradesAquired) - 2.8353));
            setUpgradesAquired(upgradesAquired +1)
            
            setIsActive(true);
            setTimeout(() => {
                setIsActive(false);
            }, 200);
        }
    }, [buyUpgrade, price, increasePerSec, score]);

    // Define styles
    const baseStyle = {
        transition: 'transform 0.2s ease',
    };

    const activeStyle = {
        transform: 'scale(0.95)', // Example scaling for active state
    };


    return (
        <div id="mainDiv" className="upgrade-body" style={isActive ? { ...baseStyle, ...activeStyle } : baseStyle} onClick={handleBuy}>
            <img draggable="false" className="logo" src={require('./img/icons8-einhorn-100 (1).png')} alt='unicorn' /> 
            <p className="upgrade-title">unicorn</p>
            <p className="price">{price}</p>
        </div>
    );
}

export default Unicorn;