import React from 'react';
import Wrapper from '../Wrapper';

const ProductCreate = () => {
    return (
        <Wrapper>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="image" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </Wrapper>
    );
}
export default ProductCreate;