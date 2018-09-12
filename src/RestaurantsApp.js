import React, { Component } from 'react';
import logo from './logo.svg';
import './RestaurantsApp.css';
import Restaurant from './Restaurant';
import NavBar from './Navbar';



const restaurants = {
  name: "restaurant",
}

class RestaurantsApp extends Component {
  render() {
   
    return (
      <div className="App">

        <header className="App-header">
          <NavBar />
        </header>
        <div>
        <p className="App-intro">

          <Restaurant 
          name="Chinese Restaurant" 
          location="100 university ave, seattle, WA"
          img="https://www.ahstatic.com/photos/1031_rsr002_00_p_1024x768.jpg"
          cuisine="Chinese" />
        </p>
        </div>
         <div>
        <p className="App-intro">

          <Restaurant 
          name="Italian restaurant" 
          location="100 university ave, seattle, WA"
          img="http://media.guestofaguest.com/t_article_content/gofg-media/2017/06/1/49090/16123558_1062902223832755_8169808252679225344_n.jpg"
          cuisine="Italian" />
        </p>
        </div>
         <div>
        <p className="App-intro">

          <Restaurant 
          name="Thai Restaurant" 
          location="100 university ave, seattle, WA"
          img="https://cdn.vox-cdn.com/thumbor/D2n8MvnW9SpoP_QJ5IZ2ac8ZdK0=/0x0:2045x1165/1200x800/filters:focal(860x420:1186x746)/cdn.vox-cdn.com/uploads/chorus_image/image/58381661/ChaiYoOfficial.0.jpg"
          cuisine="Thai" />
        </p>
        </div>

      </div>
    );
  }
}

export default RestaurantsApp;
