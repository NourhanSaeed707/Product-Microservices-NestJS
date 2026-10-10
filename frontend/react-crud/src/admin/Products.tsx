import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products');
                const data = await response.json();
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
                        <tbody>
                            <tr>
                                <th scope="row">1,001</th>
                                <td>random</td>
                                <td>data</td>
                                <td>placeholder</td>
                                <td>text</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}
export default Products;