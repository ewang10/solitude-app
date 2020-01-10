import React, { Component } from 'react';
import Button from '../../Util/Button/Button';
import './AddDateCategory.css';

class AddDateCategory extends Component {
    render() {
        return (
            <div className='AddDateCategory'>
                <h3>Add a Date Category</h3>
                <form>
                    <fieldset>
                        <label htmlFor='month-category'>Month</label>
                        <input
                            id='month-category'
                            name='month-category'
                            type='month'
                            aria-required='true'
                            aria-invalid='true'
                            required
                        />
                    </fieldset>
                    <Button type='submit' content='Submit' />
                </form>
            </div>
        );
    }
}

export default AddDateCategory;