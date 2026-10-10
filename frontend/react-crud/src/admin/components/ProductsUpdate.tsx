import React, { useEffect, useState } from 'react';
import Wrapper from '../Wrapper';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../interfaces/product';

const ProductsUpdate = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
     const { id } = useParams<{ id: string }>();

    useEffect(() => {
        (
            async () => {
                const response = await fetch(`http://localhost:8000/api/products/${id}`, {
                    method: 'PUT',
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
        await fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'PUT',
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
                    <input type="text" className="form-control" id="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="image" defaultValue={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </Wrapper>
    );
}
export default ProductsUpdate;