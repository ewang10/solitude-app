import React, { Component } from 'react';
import Button from '../../Util/Button/Button';
import JournalContext from '../../../contexts/JournalContext';
import DateCategoryApiService from '../../../services/date_category-api-service';
import ValidationError from '../../Util/ValidationError/ValidationError';
import './AddDateCategory.css';

class AddDateCategory extends Component {
    static contextType = JournalContext;

    constructor(props) {
        super(props);
        this.state = {
            dateCategory: {
                value: '',
                touched: false
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.context.clearError();
        const { dateCategory } = event.target;
        const category = {
            name: dateCategory.value
        };
        DateCategoryApiService.postCategory(category)
            .then(category => {
                dateCategory.value = '';
                this.context.addCategory(category);
                this.context.reset();
                this.props.history.push('/journals');
            })
            .catch(error => this.context.setError(error));

    }

    updateDateCategory(name) {
        this.setState({
            dateCategory: {
                value: name,
                touched: true
            }
        });
    }

    validateDateCategory() {
        const name = this.state.dateCategory.value.trim();
        const match = this.context.categories.find(category =>
            category.name === this.state.dateCategory.value
        );
        if (name.length === 0) {
            return 'Name is required';
        } else if (match) {
            return 'Name must be unique';
        }
    }

    render() {
        const { error } = this.context;
        return (
            <div className='AddDateCategory'>
                <h3>Add a Date Category</h3>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className='alert'>
                        {error && <p className='error'>{error.message}</p>}
                    </div>
                    <fieldset>
                        <label htmlFor='dateCategory'>Month</label>
                        <input
                            id='dateCategory'
                            name='dateCategory'
                            type='month'
                            aria-required='true'
                            aria-invalid='true'
                            aria-describedby="validate"
                            onChange={e => this.updateDateCategory(e.target.value)}
                            required
                        />
                        {this.state.dateCategory.touched && (
                            <ValidationError message={this.validateDateCategory()} />
                        )}
                    </fieldset>
                    <Button 
                        type='submit' 
                        content='Submit' 
                    />
                </form>
            </div>
        );
    }
}

export default AddDateCategory;