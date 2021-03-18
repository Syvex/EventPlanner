import React, { useContext } from 'react';
import './index.css';
import {EventContext} from '../../../providers/EventProvider/index.jsx';
import EventDisplay from '../../Content/EventDisplay/index.jsx';

const CreateEventModal = (props) => {
    const eventContext = useContext(EventContext);

    //on submit create and render a new eventdisplay with the userinputs
    const handleSubmit = () => {
        return (
            <EventDisplay />
        )
    }

    return (
        <div>
            {props.displayModal && (
                <form className="modal" onSubmit={handleSubmit}>
                    <input type="text" onChange={eventContext.setEvent.when} />
                    <input type="submit" value="Submit" />
                </form>
            )}
        </div>
    )
}

export default CreateEventModal;