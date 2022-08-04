import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="my-3">
        <div className="card" style={{ width: "20rem" }}>
          <img
            src={this.props.article.urlToImage}
            className="card-img-top imgSize"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.article.title.slice(0, 45)}
              {this.props.article.title.length > 45 ? "..." : ""}
            </h5>
            <p className="card-text">
              {this.props.article.description.slice(0, 70)}
              {this.props.article.description.length > 70 ? "..." : ""}
            </p>
            <a
              href={this.props.article.url}
              target="_blank"
              rel="noreferrer"
              className=" btn-danger btn btn-sm "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
