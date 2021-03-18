import React, {createContext, useState, useCallback} from 'react';

export const EventContext = createContext({});

const EventProvider = ({children}) => {

    const [events, setEvents] = useState([]);

    const addEvent = useCallback((newEvent) => {
        setEvents([...events, {id: Date.now(), ...newEvent}]);
    });

    return (
        <EventContext.Provider value={{
            events,
            addEvent,
        }}>
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider;