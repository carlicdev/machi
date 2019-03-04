import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../../context';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const { id, title, img, price } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5"
                                onClick={() => {
                                    value.handleDetail(id);
                                }}>
                                    
                                      <img src={img} alt="product" className="card-img-top" />
                                    
                                    <button 
                                        className="product-btn"  
                                        onClick={() => {
                                            value.openModal(id);
                                        }}
                                    >
                                        <span className="mr-2">
                                            <i className="fas fa-search-plus" />                    
                                        </span>
                                   </button>  
                            </div>
                        )}
                    </ProductConsumer>

                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between mb-0">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }).isRequired
};

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 0.5s linear;
    }
    .card-footer {
        background: var(--electricBlue);
        border-top: transparent;
        transition: all 0.5s linear;
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 0.5s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .product-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--electricBlue);
        border-right: none;
        border-bottom: none;
        border-top: var(--mainText) solid 1px;
        border-left: var(--mainText) solid 1px;
        color: var(--mainText);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%,100%);
        transition: all 0.5s linear;
    }
    .img-container:hover .product-btn {
        transform: translate(0,0);
    }
    .product-btn:hover {
        color: var(--electricBlue);
        background: var(--mainText);
        cursor: pointer;
    }
`;

export default Product;