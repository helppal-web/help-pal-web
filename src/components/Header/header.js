import React from 'react';
import logo from '../../assets/logo.svg';
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="App-header">
            {/* TODO: Change to helppal */}
            <Link to='/'>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </Link >
        </div>
    );
}