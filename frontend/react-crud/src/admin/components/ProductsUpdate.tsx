import React, { useEffect, useState } from 'react';
import Wrapper from '../Wrapper';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../interfaces/product';

const ProductsUpdate = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const controller = new AbortController();

        const loadProduct = async () => {
            try {
                if (!id || !/^\d+$/.test(id)) {
                    throw new Error('The product ID in the URL is invalid.');
                }
                const response = await fetch(`http://localhost:8000/api/products/${id}`, {
                    signal: controller.signal,
                });
                if (!response.ok) {
                    throw new Error(`Could not load product (status ${response.status}).`);
                }
                const product: Product = await response.json();
                setTitle(product.title);
                setImage(product.image);
            } catch (err) {
                if (err instanceof Error && err.name === 'AbortError') {
                    return;
                }
                setError(err instanceof Error ? err.message : 'An unexpected error occurred while loading the product.');
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        void loadProduct();
        return () => controller.abort();
    }, [id]);

    const submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!id) {
            setError('The product ID in the URL is missing.');
            return;
        }
        try {
            const response = await fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, image }),
            });
            if (!response.ok) {
                throw new Error(`Could not update product (status ${response.status}).`);
            }
            navigate('/admin/products');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred while updating the product.');
        }
    }
    return (
        <Wrapper>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            {isLoading ? <p>Loading product...</p> : !error && <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>}
        </Wrapper>
    );
}
export default ProductsUpdate;