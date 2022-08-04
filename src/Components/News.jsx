import React, { Component } from "react";

import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: "BBC Sport",
      title: "Shane Warne memorial - watch & follow updates",
      description:
        "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
      url: "http://www.bbc.co.uk/sport/live/cricket/60916236",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      publishedAt: "2022-03-30T08:22:26.498888Z",
      content:
        "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "Akram's yorkers, Hegg's hits, and Chapple's 6 for 18 | ESPNcricinfo.com",
      description:
        "This week, we relive the glorious one-day triumphs of Lancashire in the 1990s | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102935/o-my-akram-my-hegg-long-ago",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1221634_1296x729.jpg",
      publishedAt: "2020-04-27T10:24:08Z",
      content:
        "With still no live cricket in sight, we're digging deep into YouTube to keep ourselves entertained. This week, a trip down memory lane with one of the most dominant one-day sides ever - Lancashire in… [+5185 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title: "Sri Lanka don't win the 1996 World Cup | ESPNcricinfo.com",
      description:
        "Because fairy-tales only exist in story books | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29101950/sri-lanka-had-not-won-1996-world-cup",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219948_900x506.jpg",
      publishedAt: "2020-04-27T01:00:01Z",
      content:
        "This time in Alternative Universe, the series in which our writers let their imagination change the game: our masochistic Sri Lanka correspondent wonders what would have happened if Arjuna Ranatunga'… [+2734 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title: "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
      description:
        "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
      publishedAt: "2020-04-25T03:00:09Z",
      content:
        'R Ashwin has said that he is "fighting my own benchmarks" because his Test performances overseas are being measured against his heroics in India. Despite being the country\'s best long-form spinner in… [+3347 chars]',
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "The Coronavirus soap opera, starring KP, Warnie, Mahela | ESPNcricinfo.com",
      description: "Also featuring a pining Ravi Shastri | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28979161/andrew-fernando-satirical-look-back-cricket-march-2020",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219981_1296x1296.jpg",
      publishedAt: "2020-04-01T10:15:40Z",
      content:
        "March had a few moments of cricketing glory, most notably the conclusion of the Women's T20 World Cup in Australia. Although cricket administrators took one last chance to impose their foolishness, b… [+3817 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "Five CSK games only hardcore fans will remember | ESPNcricinfo.com",
      description:
        "From throwing a surprise in the batting order to smashing sixes after sixes, CSK have done it all | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28974528/five-csk-games-only-hardcore-fans-remember",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219712_1296x729.jpg",
      publishedAt: "2020-03-31T10:23:03Z",
      content:
        "If you're a Chennai Super Kings supporter, you'll remember MS Dhoni's sensational 29-ball 54 not out against Kings XI Punjab in Dharamsala in 2010 and that rare, pumped-up celebration where he jabbed… [+4410 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "'This is a ball the whole world will remember' - Saeed Ajmal v Sachin Tendulkar revisited | ESPNcricinfo.com",
      description:
        "We asked experts - and one participant - their considered view of the controversial Hawk-Eye projection | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28973835/this-ball-whole-world-remember-saeed-ajmal-v-sachin-tendulkar-revisited",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219912_1296x729.jpg",
      publishedAt: "2020-03-30T18:45:45Z",
      content:
        "It was a replay that rang around the world. Sachin Tendulkar is given out on the field to Saeed Ajmal, reviews it after a long discussion with his partner, and is reinstated by a Hawk-Eye projection … [+6247 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      title: "The News Glory - Top Headlines...",
      articles: this.articles,
      loding: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>{this.state.title}</h1>

        <div className="row">
          {this.state.articles.map((content) => {
            return (
              <div key={content.url} className="col-md-4">
                <NewsItem article={content} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
