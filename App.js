import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location,  sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      setState({businesses: businesses});
    });//Searching API, receiving response, and updating state with setState (review for documentation for understanding)
    //Yay, finally part 4 functionality is here. Hurray for the API!


  }//end searchYelp method

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );//end of return statement
  }//end of render method
}//end of App class

export default App;
