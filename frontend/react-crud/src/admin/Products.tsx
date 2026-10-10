import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { Product } from '../interfaces/product';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products');
                const data = await response.json();
                console.log("data:", data);
                setProducts(data);
            }
        )();
    }, []);

    const deleteProduct = async (id: number) => {
        if (window.confirm("Are you sure you want to delete this product ? ")) {
            await fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'DELETE'
            });
            // Remove the deleted product from the state
            setProducts(products.filter(product => product.id !== id));
        }
    };

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <div>
                    <Link to="/admin/product/create" className="btn btn-sm btn-outline-primary">
                        Create Product
                    </Link >
                </div>
            </div>
            <div>
                <h2>Section title</h2>
                <div className="table-responsive small">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">likes</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product: Product) => {
                                    return (
                                        <tr key={product.id}>
                                            <th scope="row">{product.id}</th>
                                            <td>{product.title}</td>
                                            <td>
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="img-thumbnail"
                                                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                                />
                                            </td>
                                            <td>{product.likes}</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => navigate(`/admin/product/${product.id}/edit`)}>
                                                    Edit
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger" onClick={() => deleteProduct(product.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr>
                                <th scope="row">1,001</th>
                                <td>random</td>
                                <td>data</td>
                                <td>placeholder</td>
                                <td>text</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}
export default Products;