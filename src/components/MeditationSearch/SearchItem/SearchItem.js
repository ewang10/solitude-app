import React, { Component } from 'react';
import './SearchItem.css';

class SearchItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <li className='SearchItem'>
                <div className='item'>
                    <h6>
                        <a href={`http://youtu.be/${item.id.videoId}`}
                            target='_blank' rel="noopener noreferrer">
                            {item.snippet.title}
                        </a>
                    </h6>
                </div>
            </li>
        );
    }
}

SearchItem.defaultProps = {
    item: {
        id: {
            videoId: ''
        },
        snippet: {
            title: ''
        }
    }
}

export default SearchItem;