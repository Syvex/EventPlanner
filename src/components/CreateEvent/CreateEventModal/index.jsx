import React, { useContext } from 'react';
import './index.css';
import {EventContext} from '../../../providers/EventProvider/index.jsx';

const CreateEventModal = (props) => {
    const eventContext = useContext(EventContext);

    return (
        <div>
            {props.displayModal && (
                <form className="modal">
                    
                    <input type="submit" value="Submit" />
                </form>
            )}
        </div>
    )
}

export default CreateEventModal;