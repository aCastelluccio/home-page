import React, { Component } from 'react';
import './Head.css';
import './NameAnimation.scss';


class Header extends Component {

    render() {
        return (
            <div>
                <header class="Head">
                    <div id="background-image" class="image">
                        <div id="name" class="name">

                            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />

                            <div class="content">
                                <div class="content__container">
                                    <p class="content__container__text">
                                        I'm
                                        </p>
                                    <ul class="content__container__list">
                                        <li class="content__container__list__item">Andrew Castelluccio</li>
                                        <li class="content__container__list__item">a software engineer</li>
                                        <li class="content__container__list__item">a competitive gamer</li>
                                        <li class="content__container__list__item">a Drew University student</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <button class="button button1">Learn More</button>

                    </div>
                </header>
            </div>
        );
    }
}
export default Header;