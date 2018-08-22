import React from 'react';
import '../Business/Business.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return(
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />;
          })//made a slightly more dynamic business list by accessing an array of businesses
        }
      </div>//end div
    );//end of return statement
  }//end of render method
}//end of BusinessList component

export default BusinessList;
