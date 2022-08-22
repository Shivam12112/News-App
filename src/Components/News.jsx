import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: "",
      page: 1,
      totalArticles: "",
    };
  }

  capitalizeFirstLetter =(string)=>{
    return(string.charAt(0).toUpperCase() + string.slice(1))
  }
  componentDidMount = async () => {
    document.title = `The News - ${this.capitalizeFirstLetter(this.props.category)}`;
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=17f037d30e7d42d081bb1dd075dee798&pageSize=20`;
    let response = await fetch(url, { methdo: "GET" });
    let data = await response.json();
    this.setState({ loading: false });
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
    });
  };

  handleNextPage = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=17f037d30e7d42d081bb1dd075dee798&page=${
      this.state.page + 1
    }&pageSize=20`;
    let response = await fetch(url, { methdo: "GET" });

    let data = await response.json();
    this.setState({ loading: false });
    this.setState({ articles: data.articles, page: this.state.page + 1 });
  };

  handlePrePage = async () => {
    this.setState({ loading: true });
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=17f037d30e7d42d081bb1dd075dee798&page=${
        this.state.page - 1
      }&pageSize=20`,
      { methdo: "GET" }
    );
    let data = await response.json();
    this.setState({ loading: false });
    this.setState({ articles: data.articles, page: this.state.page - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="d-flex justify-content-between ">
            <span className="h1">
              <span className="text-danger">{this.capitalizeFirstLetter(this.props.category)}</span> - Top
              Headlines..
            </span>
            <span className="text-danger h1">
              Page No. - {this.state.page} Out of{" "}
              {Math.ceil(this.state.totalArticles / 18)}
            </span>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-sm  btn-dark"
              onClick={() => this.handlePrePage()}
              disabled={this.state.page <= 1}
            >
              <i className="fa-solid fa-arrow-left me-1"></i>Previous
            </button>

            <button
              className="btn-sm btn  btn-dark"
              onClick={() => this.handleNextPage()}
              disabled={
                Math.ceil(this.state.totalArticles / 18) <= this.state.page
              }
            >
              Next
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>
          </div>
          <div className="row">
            {this.state.loading ? (
              <div className="text-center">{<Spinner />}</div>
            ) : (
              this.state.articles.map((content) => {
                return (
                  <div
                    key={content.url}
                    className="col-md-3 d-flex justify-content-between"
                  >
                    <NewsItem article={content} />
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="container d-flex justify-content-between mb-3">
          <button
            className="btn btn-sm btn-dark"
            onClick={() => this.handlePrePage()}
            disabled={this.state.page <= 1}
          >
            <i className="fa-solid fa-arrow-left me-1"></i>Previous
          </button>

          <button
            className="btn btn-sm btn-dark"
            onClick={() => this.handleNextPage()}
            disabled={
              Math.ceil(this.state.totalArticles / 18) <= this.state.page
            }
          >
            Next
            <i className="fa-solid fa-arrow-right ms-1"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
