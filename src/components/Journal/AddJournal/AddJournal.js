import React, { Component } from 'react';
import Button from '../../Util/Button/Button';
import './AddJournal.css';

class AddJournal extends Component {
    render() {
        return (
            <div className='AddJournal'>
                <h3>Add a Journal</h3>
                <form>
                    <fieldset>

                            <label htmlFor='title'>Title</label>
                            <input
                                id='title'
                                name='title'
                                type='text'
                                aria-required='true'
                                aria-invalid='true'
                                required
                            />


                            <label htmlFor='date'>Date</label>
                            <input
                                id='date'
                                name='date'
                                type='date'
                                aria-required='true'
                                aria-invalid='true'
                                required
                            />


                            <label htmlFor='duration'>Duration (in minutes)</label>
                            <input
                                id='duration'
                                name='duration'
                                type='number'
                                aria-required='true'
                                aria-invalid='true'
                                required
                            />

                            <label htmlFor='goal'>Goal</label>
                            <input
                                id='goal'
                                name='goal'
                                type='text'
                                aria-required='true'
                                aria-invalid='true'
                                required
                            />


                            <label htmlFor='beforeMood'>Mood (before)</label>
                            <input
                                id='beforeMood'
                                name='beforeMood'
                                type='text'
                                aria-required='true'
                                aria-invalid='true'
                                required
                            />


                            <label htmlFor='afterMood'>Mood (after)</label>
                            <input
                                id='afterMood'
                                name='afterMood'
                                type='text'
                                aria-required='true'
                                aria-invalid='true'
                                required
                            />


                            <select
                                name='journalDateCategory'
                                id='journalDateCategory'
                                aria-required='true'
                                aria-invalid='true'
                                required
                            >
                                <option value='None'>Date Category</option>
                            </select>


                            <label htmlFor='journalContent'>Content</label>
                            <textarea
                                id='journalContent'
                                name='journalContent'
                            />

                    </fieldset>
                    <Button type='submit' content='Submit' />
                </form>
            </div>
        );
    }
}

export default AddJournal;