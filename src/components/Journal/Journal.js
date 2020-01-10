import React, { Component } from 'react';
import DateCategory from './DateCategory/DateCategory';
import Filter from './Filter/Filter';
import './Journal.css';

class Journal extends Component {
    render() {
        const categories = [
            {
                id: 1,
                name: "September 2011"
            },
            {
                id: 2,
                name: "December 2019"
            },
            {
                id: 3,
                name: "April 2020"
            }
        ];

        const journals = [
            {
                id: 1,
                categoryid: 1,
                name: 'journal 1',
                duration: 5,
                beforemood: "stressed",
                aftermood: "relieved",
                date: new Date(),
                goal: '',
                content: ''
            },
            {
                id: 2,
                categoryid: 2,
                name: 'journal 2',
                duration: 5,
                beforemood: "stressed",
                aftermood: "relieved",
                date: new Date(),
                goal: '',
                content: ''
            },
            {
                id: 3,
                categoryid: 3,
                name: 'journal 3',
                duration: 5,
                beforemood: "stressed",
                aftermood: "relieved",
                date: new Date(),
                goal: '',
                content: ''
            }
        ];

        return (
            <div className="JournalHome">
                <header>
                    <h3>Journals</h3>
                </header>

                <nav className='categories-nav'>
                    <DateCategory categories={categories} />
                </nav>
                <section className='journals'>
                    <Filter journals={journals} />
                </section>

            </div>
        );
    }
}

export default Journal;