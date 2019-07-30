import React, { Component } from 'react';
import './Cv.scss';

export default class Cv extends Component {
    render() {
        return (
            <div className="cv">
                <h2>My Curriculum Vitae</h2>

                <div className="cv-cont">
                    <div className="cv-sect">
                        <div className="cv-item">
                            <h4>Ironhack</h4>
                            <p>
                                Web-Developement Bootcamp
                            </p>
                        </div>
                    </div>

                    <div className="cv-sect">
                        <div className="cv-item">
                            <h4>Showroom</h4>
                            <p>
                                Intégrateur Web
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
