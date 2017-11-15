// Create new component
import React from 'react'
import ReactDOM from 'react-dom'

const API_KEY = 'AIzaSyBuevlmx1TNtL7bQhhi40YMFJCbzqQzyPQ'

const App = () => {
  return <div>Hi there!</div>;
}


// take this component's generated HTML and render it!
ReactDOM.render(<App />, document.querySelector('.container'))
