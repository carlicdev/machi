import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const styles = {
  root: {
    flexGrow: 1,
  }
};


class Navbar extends Component {

    render() {
        const { classes } = this.props;

        return (
          <div className={classes.root} >
            <AppBar position="static" style={{backgroundColor: '#eef8ff', color: '#6cac8d'}}>
              <Toolbar>
                <h6>© 2019 Website made by <a href="#">BigSlick.com</a></h6>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
  
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);