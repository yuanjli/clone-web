import React, { Component } from 'react';
import './Restaurant.css';


class Restaurant extends Component {
  	// const propTypes = {
   //  name: PropTypes.string.isRequired,
   //  cuisine: PropTypes.string.isRequired,
   //  location: PropTypes.string.isRequired,
   //  img: PropTypes.string.isRequired,
  //}
  
  render() {
    const {name, img, cuisine, location} = this.props;
    return (
      <div className="restaurant-card">

        <div className="restaurant-card-img"> 
            <img src={img} alt={name} />
        </div>

        <div className="restaurant-card-content">
         {name}, {location}, {cuisine}.
        </div>

        
      </div>
    );
  }
}

export default Restaurant;
