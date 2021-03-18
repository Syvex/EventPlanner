import React, { useContext, useState } from 'react';
import './index.css';

const EventDisplay = ({when, what, attendance, moreInfo}) => {
    const [displayDetails, setDisplayDetails] = useState(false);

    const toggleEventDetails = () => {
        setDisplayDetails(!displayDetails);
    }

    return (
        <div className="event">
            {
                displayDetails && (
                    <div className="event-display-wrapper">
                        <p>{moreInfo}</p>
                        <button onClick={toggleEventDetails}>go back</button>
                    </div>
                ) || (
                    <div className="event-display-wrapper">
                        <span>{when}</span>
                        <span>{what}</span>
                        <span>{attendance}</span>
                        <button onClick={toggleEventDetails} className="moreInfo">more Info</button>
                    </div>
                )
                /* 
                and before or... short evaluation
                default: 0 and 1 or 1 === 0 or 1 => basic details displayed 
                display Toggle: 1 and 1 or 1 === 1 or 1 => first true is displayed, 
                which is generated through an 'and' of which the last true statement is displayed
                */
            }
        </div>
    )
}

export default EventDisplay;