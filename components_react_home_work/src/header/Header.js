import React from 'react';
import REDEV from './REDEV.jpg';
import './Header.css';


class Header extends React.Component {


    render() {
        return ( <
            div className = "header " >
            <
            img src = {
                REDEV
            }
            className = 'App-logo'
            alt = 'logo' / >

            <
            p > Почему тебе стоит обратить на нас внимание ? ? ? < /p>

            <
            /div >
        );
    }
}

export default Header;