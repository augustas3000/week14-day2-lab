import React from 'react';

// storyCodes and stories are for hacker news,
import NewsList from '../components/NewsList.js';

class HackerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyCodes: [],
      stories: [],
      filteredStories: []
    }

  }

  componentDidMount() {

    // this.loadStories("https://hacker-news.firebaseio.com/v0/topstories.json", 20)

    this.loadStories("https://hacker-news.firebaseio.com/v0/topstories.json", 18)

    // Also possible:
    
    // fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    // .then(res => res.json())
    // .then((data) => {
    //   const newData = data.slice(0, 20);
    //   const promises = newData.map((id) => {
    //     return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    //       .then(res => res.json());
    //     });
    //
    //     Promise.all(promises)
    //     .then((results) => {
    //       this.setState({ stories: results, filteredStories: results });
    //     });
    //   });


  }


  fetchStories(numberOfStoriesFromTop) {
    // first 20 ids:
    const storyCodes = [];

    for (let i=0;i<numberOfStoriesFromTop; i++) {
      storyCodes.push(this.state.storyCodes[i]);
    }

    let promises = storyCodes.map(code => {
      return fetch(
        `https://hacker-news.firebaseio.com/v0/item/${code}.json`
      ).then(res => res.json());
    });

    Promise.all(promises).then(storiesArray => {
      this.setState({stories: storiesArray});
    })

  }


  loadStories(storyCodesUrl, numberOfStoriesFromTop) {
    // "https://hacker-news.firebaseio.com/v0/topstories.json"
    fetch(storyCodesUrl)
    .then(res => res.json())
    .then(codesArray => this.setState({ storyCodes: codesArray }))
    .then(() => {
      this.fetchStories(numberOfStoriesFromTop);
    })
    .catch(err => console.error);
  }


  render() {
    return (
      <>
        <NewsList stories={this.state.stories} />
      </>
    )
  }

}


export default HackerContainer;
