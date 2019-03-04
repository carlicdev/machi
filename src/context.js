import React, { Component } from 'react';
import { storeProducts, detailProduct } from '../src/data';

// Context
const ProductContext = React.createContext();

// Provider
class ProductProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            detailProduct: detailProduct,
            modalOpen: false,
            modalProduct: detailProduct,
        };
        this.handleDetail = this.handleDetail.bind(this);
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
        });
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        });
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        });
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

// Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };