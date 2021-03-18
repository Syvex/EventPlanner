import React, { useContext, useState } from 'react';
import './index.css';
import {EventContext} from '../../../providers/EventProvider';

const CreateEventModal = (props) => {
    const {addEvent} = useContext(EventContext);

    const [when, setWhen] = useState();


    //on submit create and render a new eventdisplay with the userinputs
    const handleSubmit = (e) => {
        e.preventDefault();
        addEvent({when});
    }

    return (
        <div>
            {props.displayModal && (
                <form className="modal" onSubmit={handleSubmit}>
                    <input name="when" required type="text" onChange={(e => setWhen(e.target.value))} />
                    <input type="submit" value="Submit" />
                </form>
            )}
        </div>
    )
}

export default CreateEventModal;