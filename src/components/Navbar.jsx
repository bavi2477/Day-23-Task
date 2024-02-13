import React from 'react';

const Navbar = ({cartCount}) => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">Bavi's Shoppiee</a> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">All Products</a></li>
                                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#">New Arrival</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center me-5"> 
                        <button className="btn btn-outline-dark me-2" type="button">
                        <i class="bi bi-cart"></i>Cart <span className="badge bg-secondary">{cartCount}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
