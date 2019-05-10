import React, { Component } from 'react';
import $ from 'jquery';
//import customHistory from "./common/history";
import NewsOne from './Components/NewsOne';
import NewsTwo from './Components/NewsTwo';
import NewsThree from './Components/NewsThree';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
        items:[]
    }
}
render(){
    return (
      <Router>
        <div className="App">
            <Route path="/" exact strict render={
              () => {
              return ( <NewsOne items={this.state.items} /> )
              }
            }/>
            <Route path="/newstwo" exact strict render={
              () => {
                return ( <NewsTwo items={this.state.items} />)
              }
            }/>
            <Route path="/newsthree" exact strict render={
              () => {
                return ( <NewsThree items={this.state.items} />)
              }
            }/>
        </div>
      </Router>
    );
}
getNews(){
    $.ajax({
        url: 'https://api.hnpwa.com/v0/news/1.json',
        dataType:'json',
        cache: false,
        success: function(data){
            this.setState({items: data}, function(){
                console.log(this.state);
            });
        }.bind(this),
        error: function(xhr, status, err){
            console.log(err);
        }
    });
}

componentWillMount(){
    this.getNews();
}

componentDidMount(){
    this.getNews();
}
}


export default App;
