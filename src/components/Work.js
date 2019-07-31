import React, { Component } from 'react';
import './Work.scss';

export default class Work extends Component {



    render() {
        return (
            <div className="work">
                <h2>My work</h2>

                <h2 className="company-title">@ Showroomprive.com</h2>
                <div className="work-cont">
                    <div className="work-item amex"></div>
                    <div className="work-item avene"></div>
                    <div className="work-item ixina"></div>
                    <div className="work-item maria-galland"></div>
                </div>

                <h2 className="company-title">@ IronHack</h2>
                <div className="work-cont">
                    <div className="work-item airbnb"></div>
                    <div className="work-item spotify"></div>
                    <div className="work-item dream"></div>
                </div>
            </div>
        )
    }
}

