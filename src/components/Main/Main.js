import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';
import "./Main.css";

class Main extends Component {
    demoLogin() {
        AuthApiService.postLogin({
            user_name: 'demo',
            password: 'Demo!2345'
        })
            .then(() => {
                this.props.history.push('/search');
                window.location.reload(false);
            })
            .catch(error => console.log(error.message));
    }
    render() {
        return (
            <div className="Main">
                <header>
                    <h2>Experience Enlightenment</h2>
                    <p>Solitude helps you track your meditations, so you can see how you improve spiritually overtime.</p>
                    <button
                        type="button"
                        onClick={() => this.demoLogin()}
                    >
                        Demo
                    </button>
                </header>
                <section className="about">
                    <h2>How it works</h2>
                    <p>Solitude is a meditation journal that tracks the amount of time you meditated for, content of meditations, date of meditations, goal of meditations, whether goal was achieved, and mood before and after meditations. Don't know how to meditate? Want a guided meditation, or calm background noise? No problem! Just search it up, and it will lead you to the YouTube video of what you are looking for.</p>
                    <Link to='/register'>
                        <button type='button'>
                            Join Now
                        </button>
                    </Link>
                </section>

            </div>
        );
    }
}

export default Main;