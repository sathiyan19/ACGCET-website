import React, { useState } from "react";
import "./Profile_display.css";
import { Profilecard } from "../../widgets";


const Profile_display = ({list_info}) => {
  const cardsToShowInitially = 8;
  const cardsIncrement = 4;
  const totalCards = list_info.length;

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
    <div className="faculties">
      <div className="profile_holder">
        {list_info.slice(0, visibleCards).map((item) => (
          <Profilecard
            key={item.id}
            cover={item.cover}
            dp={item.dp}
            name={item.name}
            Designation={item.Designation}
            mailid={item.mailid}
            pdf={item.pdf}
          />
        ))}
      </div>
      {shouldShowReadMore && (
        <div className="read_more read_button" onClick={handleReadMoreClick}>
          Read More
        </div>
      )}
      {shouldShowReadLess && (
        <div className="read_less read_button" onClick={handleReadLessClick}>
          Read Less
        </div>
      )}
    </div>
  );
};

export default Profile_display;
