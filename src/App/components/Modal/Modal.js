import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../../../context';
import { ButtonContainer } from '../Button/Button';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-6 text-center text-capitalize p-5">
                                            <h5>{title}</h5>
                                            <div className="img-container2">
                                            <img src={img} className="img-fluid img-modal" alt="product" />
                                            </div>
                                            <div className="container p-3">
                                                <h6>Caja chica: ${price}</h6>
                                                <h6>Caja mediana: ${price}</h6>
                                                <h6>Caja grande: ${price}</h6>
                                            </div>
                                            <Link to="/products">
                                                <ButtonContainer close onClick={() => closeModal() }>
                                                    cerrar
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/contact">
                                            <ButtonContainer cart onClick={ () => closeModal() }>
                                                hacer pedido
                                            </ButtonContainer>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    padding-top: 1rem;
    color: var(--mainText);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    #modal {
        background: var(--aliceBlue);
    }
`;

export default Modal;