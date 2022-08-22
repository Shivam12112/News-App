import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, urlToImage, description, url,  publishedAt, } =
      this.props.article;

    return (
      <div className="section my-3">
        <div className="card">
          
          <img
            src={
              urlToImage
                ? urlToImage
                : "https://www.unicreditgroup.eu/content/unicreditgroup-eu/en/press-media/_jcr_content/content-parsys/image/image.img.jpg/1646733435306.jpg"
            }
            className="card-img-top imgSize"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.slice(0, 45) + "..." : "No Title"}
              {/* {title} */}
            </h5>
            <p className="card-text">
              {description
                ? description.slice(0, 60) + "..."
                : "No Discription"}
            </p>
            <p className="card-text">
              <small className="text-muted">
               
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className=" btn-danger btn btn-sm "
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
