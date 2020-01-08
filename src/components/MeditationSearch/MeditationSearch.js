import React, { Component } from 'react';
import './MeditationSearch.css';

class MeditationSearch extends Component {
    render() {
        return (
            <div className="MeditationSearch">

                <form className="video_search">
                    <label htmlFor="search">Find a guided meditation or calm background noise:</label>
                    <div className='search-wrapper'>
                        <input name="search" id="search" placeholder="eg. mindfulness, rainfall..." required />
                        <button type="submit">Search</button>
                    </div>
                </form>

                <section className="results"></section>
            </div>
        );
    }
}

export default MeditationSearch;