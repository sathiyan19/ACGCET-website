import React, { useState } from "react";
import "./Events.css";
import { Eventcard } from "../../widgets";
import cal_link_maker from "../../Functions/cal_link_maker";

const Events = ({ events, head }) => {
  const cardsToShowInitially = 12;  
  const cardsIncrement = 4;       
  const totalCards = events.length;

  const [visibleCards, setVisibleCards] = useState(cardsToShowInitially);

  const handleReadMoreClick = () => {
    const newVisibleCards = visibleCards + cardsIncrement;
    setVisibleCards(Math.min(newVisibleCards, totalCards));
  };

  const handleReadLessClick = () => {
    setVisibleCards(cardsToShowInitially);
  };

  const shouldShowReadMore = visibleCards < totalCards;
  const shouldShowReadLess = visibleCards === totalCards;

  return (
    <div className="gapo1">
      <div className="events" id="home_events">
        <p className="head">{head}</p>
      </div>
      <div className="row row-cols-lg-4 row-cols-2 g-3 ">
        {events.slice(0, visibleCards).map((event) => {
          let gcal_link = cal_link_maker(
            event.title,
            event.date,
            event.time,
            event.details,
            event.venue,
            event.button,
          );
          return (
            <Eventcard
              key={event.id}
              date={event.date}
              title={event.title}
              time={event.time}
              venue={event.venue}
              cal_link={gcal_link}
              status={event.status}
              button={event.button}
            />
          );
        })}

      </div>
          <div className="event__knowmore-btn-container">


      {shouldShowReadMore && (
        <div className="event__read_more event__read_button" onClick={handleReadMoreClick}>
          Read More
        </div>
      )}


      {(totalCards > cardsToShowInitially) && shouldShowReadLess && (
        <div className="event__read_less event__read_button" onClick={handleReadLessClick}>
          Read Less
        </div>
      )}
          </div>
    </div>
  );
};

export default Events;
