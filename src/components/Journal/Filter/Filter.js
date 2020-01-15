import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Item from '../Item/Item';
import Button from '../../Util/Button/Button';
import JournalContext from '../../../contexts/JournalContext';
import './Filter.css';

class Filter extends Component {
    static contextType = JournalContext;
    noFilter() {
        return this.context.journals.map((journal, i) => {
            return (
                <Item key={i} journal={journal} />
            )
        });
    }

    filter() {
        return this.context.journals
            .filter(journal => journal.categoryid === this.context.category.id)
            .map((journal, i) => (
                <Item key={i} journal={journal} />
            ))
    }

    render() {
        const journals = this.context.category ? this.filter() : this.noFilter();   
        return (
            <div className='Filter'>
                {journals}
                <Link to='/journals/add-journal'>
                    <Button type='button' content='+ Journal'/>
                    
                </Link>
            </div>
        );
    }
}

Filter.defaultProps = {
    journals: [],
    category: ''
}

export default Filter;