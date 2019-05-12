import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link'

let newItemOne
class NewsOne extends Component {
    constructor(){
        super();
        this.state = {
            items:[],
            refresh() {
                setTimeout(function () {
                    window.location.reload()
                }, 30000);
            }
        }
    }
    render(){
        let newItems;
        if(this.props.items){
            newItems = this.props.items.map(item => {
                return (
                    <NewsItem key={item.id} item={item}/>
                );
            });
        }
        newItemOne = newItems.slice(0, 10);
        return (
            <div className="News">
            {this.state.refresh()}
                <div className="First">
                    <div className="header"><h3>Hacker News</h3></div>
                    {newItemOne}
                    <Link style= {{textDecoration: 'none'}} to="/newstwo"><span className="one">More</span></Link>
                </div>
            </div>
        );
        
    }
}

NewsOne.propTypes = {
    items: PropTypes.array
}

export default NewsOne;