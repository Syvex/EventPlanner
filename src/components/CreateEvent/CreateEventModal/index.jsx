import React, { useContext, useState } from 'react';
import './index.css';
import {EventContext} from '../../../providers/EventProvider';

const CreateEventModal = (props) => {
    const {addEvent} = useContext(EventContext);

    const [when, setWhen] = useState();
    const [what, setWhat] = useState();
    const [moreInfo, setMoreInfo] = useState();


    //on submit create and render a new eventdisplay with the userinputs
    const handleSubmit = (e) => {
        e.preventDefault();
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