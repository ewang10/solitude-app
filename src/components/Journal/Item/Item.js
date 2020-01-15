import React, { Component } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import JournalContext from '../../../contexts/JournalContext';
import JournalApiService from '../../../services/journal-api-service';
import './Item.css';
import '../../Util/Button/Button.css';

class Item extends Component {
    static contextType = JournalContext;

    handleDeleteJournal(journal_id, cb) {
        this.context.clearError();
        JournalApiService.deleteJournal(journal_id)
            .then(() => {
                cb(journal_id);
            })
            .catch(error => this.context.setError(error));
    }

    render() {
        const { journal } = this.props;
        return (
            <div className='journal'>
                <h4
                    onClick={() => this.context.updateSelectedJournal(journal)}
                >
                    <Link to={`/journals/journal/${journal.id}`} >
                        {journal.name}
                    </Link>
                </h4>
                <div className='controller'>
                    <div className="date-created">
                        {format(new Date(journal.date), 'do MMM yyy')}
                    </div>
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
            </div>
        );
    }
}

export default Item;