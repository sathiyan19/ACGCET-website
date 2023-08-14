import React from "react";

import "./News.css";

import { Modal } from "../../widgets";

import { news_info } from "../../constants/news_info";

const News = () => {
  return (
    <div className="blogs">
      <p className="news">News</p>
      <div className="hl"></div>
      <div className="container marketing">
        <div className="row g-4">
          {news_info.map((item) => (
            <Modal
              key={item.id}
              heading={item.heading}
              sub_text={item["sub-head"]}
              pic={item.pic}
              content_1={item.content_1}
              content_2={item.content_2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
