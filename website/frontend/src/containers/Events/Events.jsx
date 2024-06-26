import React from "react";

import "./Events.css";

import { Eventcard } from "../../widgets";


import cal_link_maker from "../../Functions/cal_link_maker"

const Events = ({events,head}) => {
  return (
    <div className="gapo1">
      <div className="events" id="home_events">
        <p className="head">{head}</p>
      </div>
      <div className="row row-cols-lg-4 row-cols-2 g-3 ">
        {events.map((event) => {
          let gcal_link=cal_link_maker(event.title,event.date,event.time,event.details,event.venue)
          return(
          <Eventcard
            key={event.id}
            date={event.date}
            title={event.title}
            time={event.time}
            venue={event.venue}
            cal_link={gcal_link}
            status={event.status}
          />)
        })}
      </div>
    </div>
  );
};

export default Events;
