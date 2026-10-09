import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <nav className="pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/admin/products" aria-current="page">
                            Products
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Menu;