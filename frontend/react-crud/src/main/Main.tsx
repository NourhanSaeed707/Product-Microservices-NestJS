import React, { useEffect, useState } from 'react';
import { Product } from '../interfaces/product';

const Main = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8001/api/products');
                const data = await response.json();
                console.log("data:", data);
                setProducts(data);
            }
        )()
    }, []);

    const like = async (id: number) => {
        await fetch(`http://localhost:8001/api/products/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        setProducts((currentProducts: Product[]) =>
            currentProducts.map((product: Product) => {
                if (product.id === id) {
                    return { ...product, likes: product.likes + 1 };
                }
                return product;
            })
        );
    };

    return (
        <div>
            <main>
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {
                                    products.map((product: Product) => {
                                        return (                                   
                                            <div className="col" key={product.id}>
                                                <div className="card shadow-sm">
                                                    <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{product.title}</h5>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => { like(product.id) }}>Like</button>
                                                            </div>
                                                            <small className="text-muted">{product.likes} likes</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    )
}

export default Main;