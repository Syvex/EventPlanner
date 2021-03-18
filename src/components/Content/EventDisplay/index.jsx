import React, { useContext, useState } from 'react';
import './index.css';
import {EventContext} from '../../../providers/EventProvider/index.jsx';

const EventDisplay = () => {
    const eventContext = useContext(EventContext);

    const [displayDetails, setDisplayDetails] = useState(false);

    const toggleEventDetails = () => {
        setDisplayDetails(!displayDetails);
    }

    const newEventMoreInfo = eventContext.event.moreInfo;
    const newEventWhen = eventContext.event.when;
    const newEventWhat = eventContext.event.what;
    const newEventAttendance = eventContext.event.attendance;

    return (
        <div className="event">
            {
                displayDetails && (
                    <div className="event-display-wrapper">
                        <p>{newEventMoreInfo}</p>
                        <button onClick={toggleEventDetails}>go back</button>
                    </div>
                ) || (
                    <div className="event-display-wrapper">
                        <span>{newEventWhen}</span>
                        <span>{newEventWhat}</span>
                        <span>{newEventAttendance}</span>
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