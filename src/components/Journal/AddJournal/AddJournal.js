import React, { Component } from 'react';
import JournalContext from '../../../contexts/JournalContext';
import JournalApiService from '../../../services/journal-api-service';
import ValidationError from '../../Util/ValidationError/ValidationError';
import './AddJournal.css';
import '../../Util/Button/Button.css';

class AddJournal extends Component {
    static contextType = JournalContext;
    constructor(props) {
        super(props);
        this.state = {
            title: {
                value: '',
                touched: false
            },
            date: {
                value: '',
                touched: false
            },
            duration: {
                value: null,
                touched: false
            },
            goal: {
                value: '',
                touched: false
            },
            beforemood: {
                value: '',
                touched: false
            },
            aftermood: {
                value: '',
                touched: false
            },
            category: {
                value: 'None',
                touched: true
            },
            content: ''
        };
    }

    findCategoryID(name) {
        const category = this.context.categories.find(category =>
            category.name === name
        );
        return category.id;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.context.clearError();
        const { title, date, duration, goal, beforeMood, afterMood, journalDateCategory, journalContent } = event.target;
        const newJournal = {
            name: title.value,
            date: date.value,
            duration: duration.value,
            goal: goal.value,
            beforemood: beforeMood.value,
            aftermood: afterMood.value,
            categoryid: this.findCategoryID(journalDateCategory.value),
            content: journalContent.value
        };

        JournalApiService.postJournal(newJournal)
            .then(journal => {
                title.value = '';
                date.value = '';
                duration.value = '';
                goal.value = '';
                beforeMood.value = '';
                afterMood.value = '';
                journalDateCategory.value = '';
                journalContent.value = '';
                this.context.addJournal(journal);
                this.context.reset();
                this.props.history.push('/journals');
            })
            .catch(error => this.context.setError(error));
    }

    updateTitle(name) {
        this.setState({
            title: {
                value: name,
                touched: true
            }
        });
    }

    validateTitle() {
        const name = this.state.title.value.trim();
        if (name.length === 0) {
            return 'Title is required';
        }
    }

    updateDate(date) {
        this.setState({
            date: {
                value: date,
                touched: true
            }
        });
    }

    validateDate() {
        const date = this.state.date.value.trim();
        if (date.length === 0) {
            return 'Date is required';
        }
    }

    validateDuration() {
        const duration = this.state.duration.value;
        if (!duration || !(!isNaN(duration) && isFinite(duration))) {
            return 'Duration must be a finite number';
        }
    }

    updateDuration(duration) {
        this.setState({
            duration: {
                value: duration,
                touched: true
            }
        })
    }

    

    updateGoal(goal) {
        this.setState({
            goal: {
                value: goal,
                touched: true
            }
        });
    }

    validateGoal() {
        const goal = this.state.goal.value.trim();
        if (goal.length === 0) {
            return 'Goal is required';
        }
    }

    updateBeforeMood(mood) {
        this.setState({
            beforemood: {
                value: mood,
                touched: true
            }
        });
    }

    validateBeforeMood() {
        const beforeMood = this.state.beforemood.value.trim();
        if (beforeMood.length === 0) {
            return 'Mood (before) is required';
        }
    }

    updateAfterMood(mood) {
        this.setState({
            aftermood: {
                value: mood,
                touched: true
            }
        });
    }

    validateAfterMood() {
        const afterMood = this.state.aftermood.value.trim();
        if (afterMood.length === 0) {
            return 'Mood (after) is required';
        }
    }

    updateCategory(category) {
        this.setState({
            category: {
                value: category
            }
        });
    }

    validateCategory() {
        const category = this.state.category.value.trim();
        if (category === 'None') {
            return 'Category is required';
        }
    }

    updateContent(content) {
        this.setState({
            content: content
        });
    }

    render() {
        const { error } = this.context;
        const options = this.context.categories.map((category, i) =>
            <option key={i} value={category.name}>{category.name}</option>
        )
        return (
            <div className='AddJournal'>
                <h3>Add a Journal</h3>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <fieldset>
                        <div className="alert">
                            {error && <p className='error'>{error.message}</p>}
                        </div>
                        <label htmlFor='title'>Title</label>
                        <input
                            id='title'
                            name='title'
                            type='text'
                            aria-required='true'
                            aria-invalid='true'
                            aria-describedby="validate"
                            onChange={e => this.updateTitle(e.target.value)}
                            required
                        />
                        {this.state.title.touched && (
                            <ValidationError message={this.validateTitle()} />
                        )}
                        <label htmlFor='date'>Date</label>
                        <input
                            id='date'
                            name='date'
                            type='date'
                            aria-required='true'
                            aria-invalid='true'
                            aria-describedby="validate"
                            onChange={e => this.updateDate(e.target.value)}
                            required
                        />
                        {this.state.date.touched && (
                            <ValidationError message={this.validateDate()} />
                        )}
                        <label htmlFor='duration'>Duration (in minutes)</label>
                        <input
                            id='duration'
                            name='duration'
                            type='number'
                            aria-required='true'
                            aria-invalid='true'
                            aria-describedby="validate"
                            onChange={e => this.updateDuration(e.target.value)}
                            required
                        />
                        {this.state.duration.touched && (
                            <ValidationError message={this.validateDuration()} />
                        )}
                        <label htmlFor='goal'>Goal</label>
                        <input
                            id='goal'
                            name='goal'
                            type='text'
                            aria-required='true'
                            aria-invalid='true'
                            aria-describedby="validate"
                            onChange={e => this.updateGoal(e.target.value)}
                            required
                        />
                        {this.state.goal.touched && (
                            <ValidationError message={this.validateGoal()} />
                        )}
                        <label htmlFor='beforeMood'>Mood (before)</label>
                        <input
                            id='beforeMood'
                            name='beforeMood'
                            type='text'
                            aria-required='true'
                            aria-invalid='true'
                            aria-describedby="validate"
                            onChange={e => this.updateBeforeMood(e.target.value)}
                            required
                        />
                        {this.state.beforemood.touched && (
                            <ValidationError message={this.validateBeforeMood()} />
                        )}
                        <label htmlFor='afterMood'>Mood (after)</label>
                        <input
                            id='afterMood'
                            name='afterMood'
                            type='text'
                            aria-required='true'
                            aria-invalid='true'
                            aria-describedby="validate"
                            onChange={e => this.updateAfterMood(e.target.value)}
                            required
                        />
                        {this.state.aftermood.touched && (
                            <ValidationError message={this.validateAfterMood()} />
                        )}
                        <select
                            name='journalDateCategory'
                            id='journalDateCategory'
                            aria-required='true'
                            aria-invalid='true'
                            aria-describedby="validate"
                            onChange={e => this.updateCategory(e.target.value)}
                            required
                        >
                            <option value='None'>Date Category</option>
                            {options}
                        </select>
                        {this.state.category.touched && (
                            <ValidationError message={this.validateCategory()} />
                        )}
                        <label htmlFor='journalContent'>Content</label>
                        <textarea
                            id='journalContent'
                            name='journalContent'
                            onChange={e => this.updateContent(e.target.value)}
                        />

                    </fieldset>
                    <button
                        type='submit'
                        className='util-button'
                        disabled={
                            this.validateTitle() ||
                            this.validateGoal() ||
                            this.validateDuration() ||
                            this.validateDate() ||
                            this.validateCategory() ||
                            this.validateBeforeMood() ||
                            this.validateAfterMood()
                        }
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default AddJournal;