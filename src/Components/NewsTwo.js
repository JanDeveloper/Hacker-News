import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link'

let newItemTwo
class NewsTwo extends Component {
    render(){
        let newItems;
        if(this.props.items){
            newItems = this.props.items.map(item => {
                return (
                    <NewsItem key={item.id} item={item}/>
                );
            });
        }
        newItemTwo = newItems.slice(10, 20);
        return (
            <div className="News">
                <div className="First">
                    <div className="header"><h3>Hacker News</h3></div>
                    {newItemTwo}
                    <Link style= {{textDecoration: 'none'}} to="/"><span className="two">Prev | </span></Link>
                    <Link style= {{textDecoration: 'none'}} to="/newsthree"><span className="three">More</span></Link>

                </div>
            </div>
        );
        
    }
}

NewsTwo.propTypes = {
    items: PropTypes.array
}

export default NewsTwo;