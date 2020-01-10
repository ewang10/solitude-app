import React, { Component } from 'react';
import { format } from 'date-fns';
import Button from '../../Util/Button/Button';
import './JournalMain.css';

class JournalMain extends Component {
    display() {
        const { journal } = this.props;
        const duration = journal.duration
        return (
            <>
                <h4>{journal.name}</h4>
                <div className='meditation-details'>
                    <div className='meditation-date'>
                        <b>Date:</b> {format(new Date(journal.date), 'do MMM yyy')}
                    </div>
                    <div className='meditation-duration'>
                        <b>Duration:</b> {duration} {(duration === 1 ? "minute" : "minutes")}
                    </div>
                    <div className='meditation-goal'>
                        <b>Goal:</b> {journal.goal}
                    </div>
                    <div className='meditation-before-mood'>
                        <b>Mood (before):</b> {journal.beforemood}
                    </div>
                    <div className='meditation-after-mood'>
                        <b>Mood (after):</b> {journal.aftermood}
                    </div>
                </div>
                <section className='meditation-content'>
                    <div className='content'>
                        {journal.content}
                    </div>
                    <div className='content-controller'>
                        <Button type='button' content='Edit' />
                        <Button type='button' content='Delete' />
                    </div>
                </section>
            </>
        );
    }
    render() {
        const journalDetails = this.display();
        return (
            <section className='JournalMain center'>
                {journalDetails}
            </section>
        );
    }
}

export default JournalMain;