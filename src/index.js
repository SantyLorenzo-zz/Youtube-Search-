import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
const API_KEY = 'AIzaSyDbclY_dieZiJ9BrqlrKNJvV-XAnJj9jM8'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
    // this.setState({ videos:videos })
    })
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
