import React, {useContext} from 'react';
import './index.css';
import EventDisplay from './EventDisplay/index';
import {EventContext} from '../../providers/EventProvider';

const Content = () => {
    //destructuring eventcontext to only grab the events right out of it
    const {events} = useContext(EventContext);

    return (
        /*
        mapping through the events to always destructure and pass
        the newest id+event into the EventDisplay component to render
        */
        <section className="content">
            {events.map(({id, ...rest}) => (
                <EventDisplay key={id} {...rest} />
            ))}
        </section>
    )
}

export default Content;