import React, { useState } from 'react';

const Products = ({ arrObj, setCartCount}) => {
    const [status, setStatus] = useState({ });

    const cartAdd = (id) => {
        setStatus(prevStatus => ({...prevStatus, [id]: true}));
        setCartCount(prevCount => prevCount + 1);
    };

    const cartRemove = (id) => {
        setStatus(prevStatus => ({...prevStatus, [id]: false}));
        setCartCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {arrObj.map(product => (
                            <div key={product.id} className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top" src={product.imagePath} alt={product.productName} />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{product.productName}</h5>
                                            {product.strikePrice && <p className="fw-bold text-danger"><s>${product.strikePrice}</s> ${product.salePrice}</p>}
                                            {product.priceRange && <p className="fw-bold">${product.priceRange}</p>}
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                {[...Array(5)].map((_, index) => (
                                                    <div key={index} className="bi-star-fill"></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            {status[product.id] ? 
                                                <button className="btn btn-outline-danger mt-auto" onClick={() => cartRemove(product.id)}>Remove from cart</button>
                                                :
                                                <button className="btn btn-outline-dark mt-auto" onClick={() => cartAdd(product.id)}>Add to cart</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;



