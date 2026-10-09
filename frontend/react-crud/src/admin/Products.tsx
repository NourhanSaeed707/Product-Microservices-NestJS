import React from 'react';
import Wrapper from './Wrapper';

const Products = () => {
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