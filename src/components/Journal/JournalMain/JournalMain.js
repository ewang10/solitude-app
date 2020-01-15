import React, { Component } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Button from '../../Util/Button/Button';
import JournalContext from '../../../contexts/JournalContext';
import JournalApiService from '../../../services/journal-api-service';
import './JournalMain.css';
import '../../Util/Button/Button.css';

class JournalMain extends Component {
    static contextType = JournalContext;

    handleDeleteJournal(journal_id, cb) {
        this.context.clearError();
        JournalApiService.deleteJournal(journal_id)
            .then(() => {
                cb(journal_id);
                this.props.history.push('/journals');
            })
            .catch(error => this.context.setError(error));
    }

    display() {
        const { journal } = this.context;
        const duration = journal.duration;
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
                        <Link to={`/journals/edit-journal/${journal.id}`}>
                            <Button type='button' content='Edit' />
                        </Link>
                        <button
                            type='button'
                            className='util-button'
                            onClick={() => this.handleDeleteJournal(
                                journal.id,
                                this.context.deleteJournal
                            )}
                        >
                            Delete
                        </button>

                    </div>
                </section>
            </>
        );
    }
    render() {
        const journalDetails = this.context.journal ? this.display() : '';
        return (
            <section className='JournalMain center'>
                {journalDetails}
            </section>
        );
    }
}

export default JournalMain;