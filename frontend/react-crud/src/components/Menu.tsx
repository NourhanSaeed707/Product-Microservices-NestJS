import React from 'react';

const Menu = () => {
    return (
        <div>
            <nav className="pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="/" aria-current="page">
                            Products
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Menu;