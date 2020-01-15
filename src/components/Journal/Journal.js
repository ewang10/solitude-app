import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DateCategory from './DateCategory/DateCategory';
import Filter from './Filter/Filter';
import JournalContext from '../../contexts/JournalContext';
import DateCategoryApiService from '../../services/date_category-api-service';
import JournalApiService from '../../services/journal-api-service';
import './Journal.css';

class Journal extends Component {
    static contextType = JournalContext;

    componentDidMount() {
        this.context.clearError();
        DateCategoryApiService.getCategories()
            .then(categories => this.context.setCategories(categories))
            .catch(error => this.context.setError(error));
        JournalApiService.getJournals()
            .then(journals => this.context.setJournals(journals))
            .catch(error => this.context.setError(error));
    }

    render() {

        return (
            <div className="JournalHome">
                <header>
                    <h3 onClick={() => this.context.reset()}>
                        <Link to='/journals'>Journals</Link>
                    </h3>
                </header>

                <nav className='categories-nav'>
                    <DateCategory />
                </nav>
                <section className='journals'>
                    <Filter />
                </section>

            </div>
        );
    }
}

export default Journal;