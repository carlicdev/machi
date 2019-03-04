import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonContainer } from '../Button/Button';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4 cursive">Machi</h1>
                <p className="lead">En Pasteleria <strong>Machi</strong> nos enfocamos en la repostería y panadería de alta calidad te invitamos a hacer tu pedido con anticipación, de preferencia dos días previos a la entrega. Nuestros postres son ideales para consentir a tus invitados o como regalo a todo amante del dulce. </p>
                <Link to = "/products">
                    <ButtonContainer>Catalogo</ButtonContainer>
                </Link>
            </div>
        );
    }
}

export default Jumbotron;