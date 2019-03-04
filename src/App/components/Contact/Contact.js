import React, { Component } from 'react';

import Title from '../Title/Title';
import contact2 from './img/contact.jpeg';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="haz tu" title="pedido" />
                        <div className="row blue-background mt-3 p-0">
                            <div className="col-md-6">
                                <div className="img-container">
                                    <img src={contact2} alt="contacto" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="container p-5">
                                    <h3>Contacto</h3>
                                    <div className="container p-5">
                                        <ul className="mt-3">
                                            <li className="p-1"><span className="mr-2"><i className="fab fa-whatsapp"></i></span> 55-55-55-55</li>
                                            <li className="p-1"><span className="mr-2"><i className="fas fa-envelope"></i></span> bigslick.dev@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;