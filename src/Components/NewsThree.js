import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link'

let newItemThree;
class NewsThree extends Component {
    render(){
        let newItems;
        if(this.props.items){
            newItems = this.props.items.map(item => {
                return (
                    <NewsItem key={item.id} item={item}/>
                );
            });
        }
        newItemThree = newItems.slice(20, 30);
        return (
            <div className="News">
                <div className="First">
                    <div className="header"><h3>Hacker News</h3></div>
                    {newItemThree}
                    <Link style= {{textDecoration: 'none'}} to="/newstwo"><span className="two">Prev</span></Link>
                    
                </div>
            </div>
        );
    }
    
}

NewsThree.propTypes = {
    items: PropTypes.array
}

export default NewsThree;