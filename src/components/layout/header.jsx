import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Explore React</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-item nav-link active" to="cart">Total items : {props.totalItems}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item nav-link active" to="todo">Todo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;