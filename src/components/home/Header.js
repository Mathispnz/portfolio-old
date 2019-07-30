import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <div>

                    </div>

                    <div>

                    </div>
                </div>

                <div className="home-hobbies_cont">
                    <div className="hobbies_item hobby_1">
                        <p>Music</p>
                    </div>

                    <div className="hobbies_item hobby_2">
                        <p>Technologies</p>
                    </div>

                    <div className="hobbies_item hobby_3">
                        <p>Fashion</p>
                    </div>
                </div>
            </div>
        )
    }
}
