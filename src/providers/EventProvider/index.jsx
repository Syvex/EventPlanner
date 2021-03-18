import React, {createContext, useState, useCallback} from 'react';

export const EventContext = createContext({});

const EventProvider = ({children}) => {

    const [events, setEvents] = useState([]);

    /*
    useCallback used to remember the function so it doesnt have to re-render it
    every time this context is used
    */
    const addEvent = useCallback((newEvent) => {
        //copies all existing events and adds a new event with a "unique" id
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