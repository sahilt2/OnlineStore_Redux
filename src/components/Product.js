import React from 'react';

const Product = (props) => {
    const {image, title} = props;
    return (
        <div>
            <section className='Detail'>
                <article className='Detail_thumbnail'>
                    <img src={image} alt={title}/>
                </article>

            </section>
        </div>
    );
};

export default Product;