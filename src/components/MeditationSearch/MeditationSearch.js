import React, { Component } from 'react';
import SearchMeditationApiService from '../../services/search-meditation-api-service';
import SearchItem from './SearchItem/SearchItem';
import './MeditationSearch.css';

class MeditationSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            showList: false,
            noResult: false
        }
    }

    componentDidMount() {
        this.setState({
            showList: false,
            noResults: false
        });
    }

    handleSearch(event) {
        event.preventDefault();
        const { search } = event.target;
        this.setState({
            showList: false,
            noResult: false
        });
        SearchMeditationApiService.getSearchResults(search.value)
            .then(data => {
                console.log('data', data)
                this.setState({ searchResults: data.items });
                if (this.state.searchResults.length === 0) {
                    this.setState({ noResult: true });
                } else {
                    this.setState({ showList: true });
                }
            })
            .catch(error => console.log(error));
    }

    showResults = () => {
        return this.state.searchResults.map((item, i) =>
            <SearchItem key={i} item={item} />
        );
    }

    render() {
        const isHidden = this.state.showList ? '' : 'hidden';
        return (
            <div className="MeditationSearch">

                <form
                    className="video_search"
                    onSubmit={event => this.handleSearch(event)}
                >
                    <label htmlFor="search">Find a guided meditation or calm background noise:</label>
                    <div className='search-wrapper'>
                        <input name="search" id="search" placeholder="eg. mindfulness, rainfall..." required />
                        <button type="submit">Search</button>
                    </div>
                </form>
                {
                    this.state.noResult &&
                    (this.state.searchResults.length === 0) &&
                    <p className='no-result'>No results found</p>
                }
                <section id="results" className={isHidden}>
                    <ul id='result-list'>
                        {
                            !this.state.noResult &&
                            this.state.searchResults.length &&
                            this.showResults()
                        }
                    </ul>
                </section>
            </div>
        );
    }
}

export default MeditationSearch;