import React, {useState} from 'react';
import './index.css';
import CreateEventModal from './CreateEventModal/index.jsx';
import Button from '../Button/index.jsx';

const CreateEvent = () => {

    const [displayModal, setDisplayModal] = useState(false);

    const onToggleModal = () => {
        setDisplayModal(!displayModal);
    }

    return (
        <div className="event-creator-wrapper">
            <Button onClick={onToggleModal}>
                Create an Event!
            </Button>
            <CreateEventModal 
                displayModal={displayModal}
            />
        </div>
    )
}

export default CreateEvent;