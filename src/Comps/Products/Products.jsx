import React from 'react';
import Latest from './Latest';
import Soon from './Soon';

function Products(props) {
    return (
        <section className="owl-carousel active-product-area section_gap">
            <Latest />
            <Soon />
        </section>
    );
}

export default Products;