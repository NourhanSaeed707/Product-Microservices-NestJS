import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { Product } from '../interfaces/product';

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products');
                const data = await response.json();
                console.log("data:" ,data);
                setProducts(data);
            }
        )();

    }, []);

    return (
        <Wrapper>
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
                                                <img src={product.image} alt={product.title} height= "180"className="img-thumbnail" />
                                            </td>
                                            <td>{product.likes}</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                                                <button className="btn btn-sm btn-outline-danger">Delete</button>
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