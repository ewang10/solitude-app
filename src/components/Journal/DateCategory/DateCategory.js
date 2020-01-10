import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../Util/Button/Button';
import './DateCategory.css';

class DateCategory extends Component {

    render() {
        const categories = this.props.categories.map((category, i) => {
            return (
                <div className="category" key={i}>
                    <h4>
                        <NavLink to={`/journals/date-category/${category.id}`}>
                            {category.name}
                        </NavLink>
                    </h4>
                </div>
            )
        })
        return (
            <section className="DateCategory">
                {categories}
                <Link to='/journals/add-date-category'>
                    <Button type='button' content='+ Date'/>
                </Link>
            </section>
        );
    }
}

DateCategory.defaultProps = {
    categories: []
}

export default DateCategory;