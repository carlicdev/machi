import React, { Component } from 'react';

import ImageGridList from '../ImageGridList/ImageGridList';
import ImageGridList2 from '../ImageGridList/ImageGridList2';
import Jumbotron from '../Jumbotron/Jumbotron';

class Home extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                  <div className="col-md-4">
                    <ImageGridList />
                  </div>
                  <div className="col-md-4">
                    <Jumbotron />
                  </div>
                  <div className="col-md-4">
                    <ImageGridList2 />
                  </div>
                </div>
            </div>
        );
    }
}

export default Home;