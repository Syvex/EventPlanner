import React, {createContext, useState} from 'react';

export const EventContext = createContext({});

const EventProvider = ({children}) => {

    const [event, setEvent] = useState({
        when: 'date',
        what: 'activity',
        attendance: 'attending?',
        moreInfo: 'details',
    });

    return (
        <EventContext.Provider value={{
            event,
            setEvent,
        }}>
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider;