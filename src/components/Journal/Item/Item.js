import React, {Component} from 'react';
import {format} from 'date-fns';
import {Link} from 'react-router-dom';
import Button from '../../Util/Button/Button';
import './Item.css';

class Item extends Component {
    render() {
        const {journal} = this.props;
        return (
            <div className='journal'>
                <h4>
                    <Link to={`/journals/journal/${journal.id}`} >
                        {journal.name}
                    </Link>
                </h4>
                <div className='controller'>
                    <div className="date-created">
                        {format(new Date(journal.date), 'do MMM yyy')}
                    </div>
                    <Button type='button' content='Delete'/>
                </div>
            </div>
        );
    }
}

export default Item;