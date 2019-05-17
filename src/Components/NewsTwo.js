import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import refreshPage from './refresh.png'

let newItemTwo
class NewsTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            refresh() {
                setTimeout(function () {
                    window.location.reload()
                }, 30000);
            },
        }
    }

    refreshPage(e) {
        e.preventDefault();
        window.location.reload();
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
        newItemTwo = newItems.slice(10, 20);
        return (
            <div className="News">
            {this.state.refresh()}
                <div className="First">                   
                    <div className="header">
                    <h3>Hacker News</h3>
                    <img className="image" src={refreshPage} onClick={this.refreshPage.bind(this)} alt="refreshPage"/>
                    </div>
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