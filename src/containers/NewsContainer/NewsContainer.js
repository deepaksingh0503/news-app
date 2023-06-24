import React, { Component } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./newsContainer.css";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import { PropTypes } from "prop-types";
export default class NewsContainer extends Component {
  static propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    catagory: PropTypes.string,
    API_KEY: PropTypes.string,
  };
  static defaultProp = {
    pagesize: 15,
    country: "us",
    catagory: "science",
    API_KEY: "6346038a0dd140918037f07891a970ea",
  };
  constructor() {
    super();

    this.state = {
      articles: [
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "Reaction as Man City win Champions League and complete Treble",
        "description": "Premier League champions and FA Cup winners Manchester City defeat Inter Milan in the Champions League final to complete an outstanding Treble.",
        "url": "http://www.bbc.co.uk/sport/live/football/65864643",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2023-06-11T07:52:19.3050326Z",
        "content": "Video content\r\nVideo caption: Manchester City 1-0 Inter Milan: City fans react to Rodri's goalManchester City 1-0 Inter Milan: City fans react to Rodri's goal\r\nIt's just gone 8am in Manchester, 10am … [+428 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Donald Trump still headline act for Republicans, despite charges",
        "description": "The former US president appeared unfazed by his indictment at a party convention in North Carolina.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-65869992",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CEEF/production/_130057925_26ee96c8fb960fce7bc3a4741dffd5aaa92361160_0_5000_33351000x667.jpg",
        "publishedAt": "2023-06-11T07:22:17.0238514Z",
        "content": "Former US President Donald Trump appeared defiant at two Republican Party conventions on Saturday, a day after he was charged with mishandling classified documents. \r\nMr Trump - who is running to be … [+4182 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Gladiator sequel crew members injured in stunt sequence on set",
        "description": "The crew members are receiving medical treatment after the accident while filming in Morocco.",
        "url": "http://www.bbc.co.uk/news/entertainment-arts-65869287",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7886/production/_104145803_gladiator_gettyuniversal.jpg",
        "publishedAt": "2023-06-11T02:07:14.0554216Z",
        "content": "Several crew members filming the Gladiator sequel in Morocco have been injured in a stunt accident on set.\r\nThe film's production company Paramount Pictures said the injuries were non life-threatenin… [+1799 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukrainians remember Bakhmut, city of salt and sparkling wine",
        "description": "Residents share memories of their city, before its destruction in Russia's full-scale invasion.",
        "url": "http://www.bbc.co.uk/news/world-europe-65812846",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12C50/production/_130008867_344649017_937028520883089_3477141816975753832_n.jpg",
        "publishedAt": "2023-06-11T00:07:15.6186614Z",
        "content": "The eastern Ukrainian town of Bakhmut is now known across the world as the site of the longest and possibly bloodiest battle in Russia's war on Ukraine.\r\nIt is now almost completely destroyed, and al… [+6393 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Children reunited with family after surviving 40 days in Amazon",
        "description": "The children have begun playing again in hospital, officials say, as the eldest is praised for her care.",
        "url": "http://www.bbc.co.uk/news/world-latin-america-65869284",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6121/production/_130056842_twitter.png",
        "publishedAt": "2023-06-10T23:37:19.3054749Z",
        "content": "Media caption, Watch: How Colombia children jungle rescue unfolded\r\nFour children who survived weeks in Colombia's Amazon jungle have been reunited with relatives and have begun playing again, offici… [+3937 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Canada wildfire crews try to control the uncontrollable",
        "description": "Unprecedented fires in Quebec that caused hazardous smoke further south have tested firefighters.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-65864201",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FC35/production/_130056546_image-1189x841-3.jpg",
        "publishedAt": "2023-06-10T23:22:13.570854Z",
        "content": "Hazardous smoke from Canadian wildfires blanketed the skies in large parts of North America last week. The government says the country as a whole is on course for its worst year for wildfires on reco… [+6494 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Donald Trump: Former president to make first speech since federal charges announced",
        "description": "Mr Trump will speak at a Republican Party convention in Georgia before moving onto North Carolina.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-65868294",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7959/production/_130056013_ea9e4706f5b624d13396dffdd2c5c641023e81d6.jpg",
        "publishedAt": "2023-06-10T18:22:19.673687Z",
        "content": "Former US President Donald Trump will today make his first public appearance since being indicted on federal charges for his handling of classified documents.\r\nHe will speak at a Republican Party con… [+2332 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ted Kaczynski, the Unabomber, found dead in US prison cell",
        "description": "Kaczynski evaded capture for 20 years after a mass bombing campaign that killed three people.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-65867291",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
        "publishedAt": "2023-06-10T17:22:23.5641331Z",
        "content": "Ted Kaczynski, better known as the Unabomber, has been found dead in his jail cell by prison officers, US media says, citing prison officials. \r\nKaczynski, 81, was discovered early on Saturday at the… [+542 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine counter-offensive actions have begun, Zelensky says",
        "description": "Ukraine's president refused to say which stage the counter-offensive against Russian forces was in.",
        "url": "http://www.bbc.co.uk/news/world-europe-65866880",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1F77/production/_130055080_c9110006eb10d6bc3449c0bbcf1490ae43ba8ff71930_707_2975_16741000x563.jpg",
        "publishedAt": "2023-06-10T14:52:19.563486Z",
        "content": "Ukraine's President Volodymyr Zelensky appears to have confirmed that Ukraine's long-awaited counter-offensive against Russia has started.\r\n\"Counteroffensive and defensive actions are taking place,\" … [+2913 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "'What if we don't play ball?' Why Trump indictment could be so damaging",
        "description": "Now we know the full scope of the charges, it's clear how dramatic some of the accusations are.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-65863396",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/151D4/production/_129848468_gettyimages-1248566971.jpg",
        "publishedAt": "2023-06-10T00:52:19.8039577Z",
        "content": "Donald Trump's indictment on federal charges has been unsealed, and the full scope of the case against the former president for mishandling classified documents is coming into view.\r\nMr Trump has bee… [+5691 chars]"
        }
        ],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.API_KEY}&category=${this.props.catagory}&page=1&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  render() {
    let { pagesize } = this.props;

    let clickedNext = async () => {
      if (!Math.ceil(this.state.totalResults / 21) < this.state.page + 1) {
        this.setState({ loading: true });

        let url = `https://newsapi.org/v2/top-headlines?country=${
          this.props.country
        }&apiKey=${this.props.API_KEY}&category=${this.props.catagory}&page=${
          this.state.page + 1
        }&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page: this.state.page + 1,
          loading: false,
        });
      }
    };

    let clickedPre = async () => {
      this.setState({ loading: true });
      let url = ` https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&apiKey=${this.props.API_KEY}&category=${this.props.catagory}&page=${
        this.state.page - 1
      }&pagesize=${this.props.pagesize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false,
      });
    };
    return (
      <>
        <div className='newsContainer_container'>
          <h2>Top HeadLines - {this.props.catagory.toUpperCase()}</h2>
          {this.state.loading && <LoadingBar />}
          <div className='cardContainer'>
            {!this.state.loading  &&
              this.state.articles.map((element) => {
                return (
                  <NewsCard
                    title={element.title}
                    description={element.description}
                    urlToImage={element.urlToImage}
                    newsUrl={element.url}
                    key={element.url}
                    source={element.source.name}
                    publishedAt={element.publishedAt}
                  />
                );
              })}
            ;
          </div>

          <div className='navigation_btn'>
            {this.state.page !== 1 && (
              <div onClick={clickedPre}>&laquo; Previous</div>
            )}
            {!(
              Math.ceil(this.state.totalResults / 21) <
              this.state.page + 1
            ) && <div onClick={clickedNext}>Next &raquo;</div>}
          </div>
        </div>
      </>
    );
  }
}
