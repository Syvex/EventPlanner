import React, { useContext, useState } from 'react';
import './index.css';
import {EventContext} from '../../../providers/EventProvider';

const CreateEventModal = (props) => {
    //addEvent is being grabbed directly out of the EventContext through object destructuring
    const {addEvent} = useContext(EventContext);

    //each event attribute gets it's own state
    const [when, setWhen] = useState();
    const [what, setWhat] = useState();
    const [moreInfo, setMoreInfo] = useState();

    //on submit create and render a new eventdisplay with the userinputs
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the page from refreshing upon submit
        props.onToggleModal();
        addEvent({when, what, moreInfo});
    }

    return (
        <div>
            {props.displayModal && (
                <form className="modal" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <div className="label-div">
                            <span>When?</span>
                            <span>What?</span>
                            <span>More Info</span>
                        </div>
                        <div className="input-div">
                            <input name="when" required type="text" onChange={(e => setWhen(e.target.value))} />
                            <input name="when" required type="text" onChange={(e => setWhat(e.target.value))} />
                            <textarea name="when" defaultValue="event details" type="text" onChange={(e => setMoreInfo(e.target.value))} />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )
}

export default CreateEventModal;