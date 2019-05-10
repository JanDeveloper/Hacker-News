import React, { Component } from 'react';
import PropTypes from 'prop-types'

class NewsItem extends Component {
    
    render() {
        return (
            <li className="NewsItem">
            <div>
            <span className="id">{} </span>
            <span className="title">{this.props.item.title} </span>
            <span className="domain">({this.props.item.domain})</span>
            </div>
            <div>
            <span className="points">{this.props.item.points} Points</span> <span className="text">by </span>  
            <span className="user">{this.props.item.user} </span>
            <span className="time-ago">{this.props.item.time_ago} | </span>
            <span className="comments">{this.props.item.comments_count} comments</span>
            </div>
            <hr />
            </li>
        )
    }
}

NewsItem.propTypes = {
    item: PropTypes.object
}

export default NewsItem;