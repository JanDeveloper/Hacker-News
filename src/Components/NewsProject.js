import React, { Component } from 'react';
import $ from 'jquery';
import {Router, Route} from "react-router-dom";
//import customHistory from "./common/history";
//import NewsOne from './NewsOne';
import NewsTwo from './NewsTwo'

class NewsProject extends Component {
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }
    render(){
        return (
        <div className="NewsProject">
            <NewsOne items={this.state.items} />
        </div>
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

export default NewsProject;
