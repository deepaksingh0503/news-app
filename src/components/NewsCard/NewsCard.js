import React, { Component } from "react";
import "./newsCard.css";
export default class NewsCard extends Component {
  render() {
    let { title, description, urlToImage, newsUrl,source, publishedAt } = this.props;
    return (
      <>
        <div className='newCard_container'>
          <h3>News by-{source}</h3>
          <img src={urlToImage?urlToImage:"https://media.cnn.com/api/v1/images/stellar/prod/200917160446-iss-file.jpg?q=x_55,y_131,h_1095,w_1945,c_crop/w_800"} alt='newsImage' />

          <h4>{title}</h4>
          <p>{description}</p>
          <div className='newsCardButton'>
            <a href={newsUrl} target="_blank" >Read More</a>{" "}
          </div>
      <p className="newsCard_date">    On:  {new Date(publishedAt).toUTCString() }</p>
        </div>
      </>
    );
  }
}
