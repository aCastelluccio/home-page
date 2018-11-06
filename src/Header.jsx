import React, { Component } from 'react';
import './Head.css';
import './scsstest.scss';


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
                                        <li class="content__container__list__item">a developer</li>
                                        <li class="content__container__list__item">a gamer</li>
                                        <li class="content__container__list__item">a student</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;