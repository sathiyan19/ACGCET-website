import React from "react";

import "./News.css";

import { Modal_carousel } from "../../components";

import { Underline } from "../../widgets";

import { news_info } from "../../constants/news_info";

const News = () => {
  return (
    <div className="blogs">
      <div className="news_heading">
      <Underline heading="News"/>
      </div>
      <Modal_carousel info={news_info}/>
    </div>
  );
};

export default News;
