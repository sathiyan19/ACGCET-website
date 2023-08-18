import React, { useEffect, useState } from "react";
import "./Life.css";
import { Profilecard } from "../../widgets";
import { profileinfo } from "../../constants/profilecards";

const Life = () => {
  const cardsToShowInitially = 5;
  const cardsIncrement = 5;
  const totalCards = profileinfo.length;

  const [visibleCards, setVisibleCards] = useState(cardsToShowInitially);
  
  const handleReadMoreClick = () => {
    const newVisibleCards = visibleCards + cardsIncrement;
    setVisibleCards(Math.min(newVisibleCards, totalCards));
  };

  const handleReadLessClick = () => {
    setVisibleCards(cardsToShowInitially);
  };

  const shouldShowReadMore = visibleCards < totalCards;

  return (
    <div className="faculties">
      <div className="profile_holder">
        {profileinfo.slice(0, visibleCards).map((item) => (
          <Profilecard
            key={item.id}
            cover={item.cover}
            dp={item.dp}
            name={item.name}
            Designation={item.Designation}
            mailid={item.mailid}
          />
        ))}
      </div>
      {shouldShowReadMore && (
        <div className="read_more read_button" onClick={handleReadMoreClick}>
          Read More
        </div>
      )}
      {visibleCards > cardsToShowInitially && (
        <div className="read_less read_button" onClick={handleReadLessClick}>
          Read Less
        </div>
      )}
    </div>
  );
};

export default Life;
