import React, {useContext} from 'react';
import './index.css';
import EventDisplay from './EventDisplay/index';
import {EventContext} from '../../providers/EventProvider';

const Content = () => {
    const {events} = useContext(EventContext);

    return (
        <section className="content">
            {events.map(({id, ...rest}) => (
                <EventDisplay key={id} {...rest} />
            ))}
        </section>
    )
}

export default Content;