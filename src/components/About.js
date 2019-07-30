import React, { Component } from 'react';
import './About.scss';

export default class About extends Component {

    componentDidMount() {
        this.renderMap();
    }

    renderMap = () => {
        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCQUWzuqJZaj4UCqvfjC8yOunYzEJkHBss&callback=initMap');
        window.initMap = this.initMap;
    }

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 48.8534, lng: 2.3488},
          zoom: 13
        });
        const marker = new window.google.maps.Marker({
            position: {lat: 48.8557241, lng: 2.3256659},
            map: map
        })
      }

    render() {
        return (
            <div className="about">
                <section className="about-me">
                    <div className="about-me_item">
                        <h2>About Me</h2>

                        <div className="profile-picture">

                        </div>
                    </div>

                    <div className="about-me_item">
                        <h2>Web Developer</h2>

                        <p>Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret, Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.</p>
                    </div>
                </section>

                <section className="about-live">
                    <h2>Where do I live ?</h2>
                    <div id="map">

                    </div>
                </section>
            </div>
        )
    }
}

// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&
// callback=initMap"
// async defer></script> 

function loadScript(url) {
    var index = window.document.getElementsByTagName('script')[0];
    var script = window.document.createElement('script');
    script.src =  url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}