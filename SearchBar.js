import React from 'react';
import  './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',//refers to the search term from search input
      location: '',//refers to the location to search near from input
      sortBy: 'best_match'//one of the sort options on search page
    };//end this.state

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
//    this.handleSortByChange.bind(this); forgot I already used .bind() in a return statement below on line 75
    //bind handlers for each state to the current value of this

    this.handleSearch = this.handleSearch.bind(this);
    //bind handler for search

    this.renderSortByOptions = this.renderSortByOptions.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };//end of sortByOptions object

  }//end constructor method

  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    }
      return '';//end if chain
  }//end getSortByClass method

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
    //setting state to chosen sortByOption listed in the object sortByOptions
  }//end handleSortByChange method

  handleTermChange(event) {
    this.setState({term: event.target.value});
    //set state of term after an event occurs
  }//end of handleTermChange method

  handleLocationChange(event) {
    this.setState({location: event.target.value});
    //set state of location after an event occurs
  }//end of handleLocationChange

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    //searchYelp call to current states of term, location, & sortBy
    event.preventDefault();
    //event.preventDefault() prevents the defualt action of clicking a link from triggering at the end of the method
  }//end handleSearch method

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      //store key values into variable (indexed by sortByOption?)
      let sortByOptionValue = this.sortByOptions[sortByOption];

      //return the key value as a list item -- shouldn't it be 'key name', not key value that we want to display in this list?
      return
        (<li
            key={sortByOptionValue}
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>
          {sortByOption}
        </li>);

    });//end iterator of keys from object and return statement
  }//end of renderSortByOptions method

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange} />
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );//end of return statement
  }//end of render method
}//end of SearchBar component

export default SearchBar;
