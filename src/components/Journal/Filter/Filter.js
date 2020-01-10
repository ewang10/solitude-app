import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Item from '../Item/Item';
import Button from '../../Util/Button/Button';
import './Filter.css';

class Filter extends Component {
    noFilter() {
        return this.props.journals.map((journal, i) => {
            return (
                <Item key={i} journal={journal} />
            )
        });
    }
/*
    filter() {
        return this.props.journals
            .filter(journal => journal.categoryid === category.id)
            .map((journal, i) => (
                <Item key={i} journal={journal} />
            ))
    }
*/
    render() {
        //const journals = this.props.category ? this.filter() : this.noFilter();   
        const journals = this.noFilter();
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