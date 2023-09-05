import React,{useState} from "react";

import './Reunion_card_display.css'

import { Reunion_card } from "../../widgets";

const Renioun_card_display = ({cardinfo_list}) => {
  const initial_cards = 3;
  const card_increment = 3;
  const card_total = cardinfo_list.length;

  const [visible_no, setvisible_no] = useState(initial_cards);

  const handleReadMoreClick = () => {
    const newvisible_no = visible_no + card_increment;
    setvisible_no(Math.min(newvisible_no, card_total));
  };

  const handleReadLessClick = () => {
    setvisible_no(initial_cards);
  };

  const shouldShowReadMore = visible_no < card_total;
  const shouldShowReadLess = visible_no === card_total;

  return (
    <div className="reunion_display">
    <div className="alumni_reunion_card_holder">
      {cardinfo_list.slice(0, visible_no).map((item) => (
        <Reunion_card
          cover={item.coverpic}
          batch={item.batch}
          name={item.name}
          desc={item.desc}
          date={item.date}
        />
      ))}
    </div>
    {shouldShowReadMore && (
      <div className="read_more read_but" onClick={handleReadMoreClick}>
        Read More
      </div>
    )}
    {(card_total>initial_cards) && shouldShowReadLess && (
      <div className="read_less read_but" onClick={handleReadLessClick}>
        Read Less
      </div>
    )}
    </div>
  );
};

export default Renioun_card_display;
