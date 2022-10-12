import "./Header.css"
import React from 'react';

const Header = (props) => {
    return (
        <div className="bg-image">
            <div className="bg-content">
                <div className="header-title">
                    todo
                </div>
                {props.children}
            </div>

        </div>
    ) 
}
export default Header