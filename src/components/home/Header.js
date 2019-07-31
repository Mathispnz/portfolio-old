import React, { Component } from 'react';
import './Header.scss';
import { Spring } from 'react-spring/renderprops';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <div>
                        {/* PUT A PROFILE PIC */}
                    </div>

                    <div>
                        <h2>Web Developer</h2>
                    </div>
                </div>

                
                    <Spring
                        from={{opacity: 0, marginTop: -50, transition: '1s all'}}
                        to={{opacity: 1, marginTop: 0}}
                    >
                        { props => (
                            <div style={props}>
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
                        ) }
                  
                    </Spring>
            </div>
        )
    }
}
