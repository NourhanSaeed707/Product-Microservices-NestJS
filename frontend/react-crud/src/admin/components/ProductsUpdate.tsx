import React, { useEffect, useState } from 'react';
import Wrapper from '../Wrapper';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../interfaces/product';

const ProductsUpdate = (props: { productId: number }) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                const response = await fetch(`http://localhost:8000/api/products/${props.productId}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                const product: Product = await response.json();
                setTitle(product.title);
                setImage(product.image);
            }
        )()
    }, []);

    const submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ title, image });
        await fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                image
            })
        });
        navigate('/admin/products');
    }
    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="image" onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </Wrapper>
    );
}
export default ProductsUpdate;