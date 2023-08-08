import React from 'react'

import './Events.css'

import {Eventcard} from '../../widgets'

import { events } from '../../constants/events'

const Events = () => {
  return (
    <div className="gapo1">
            <div className='events'>
                <p className="head">Events</p>
            </div>
            <div className="row row-cols-lg-4 row-cols-2 g-3 ">

                {events.map((event)=><Eventcard key={event.id} date={event.date} title={event.title} time={event.time} venue={event.venue}/>)}
                
            </div>
        </div>
  )
}

export default Events