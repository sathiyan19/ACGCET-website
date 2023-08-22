import React from "react";

import "./News.css";

import { Modal_carousel } from "../../components";

import { news_info } from "../../constants/news_info";

const News = () => {
  return (
    <div className="blogs">
      <p className="news">News</p>
      <div className="hl"></div>
      <Modal_carousel info={news_info}/>
    </div>
  );
};

export default News;
