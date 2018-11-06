import React, { Component } from 'react';
import './NavBar.scss';


class NavBar extends Component {

    render() {
        return (
            <div class="NavBar">
                    <ul>
                        <li><a class="active" href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>

            </div>
        );
    }
}
export default NavBar;