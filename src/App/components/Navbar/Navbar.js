import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
    fontFamily: 'Montez',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 50,
  },
};


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }

   handleClick = e => {
       this.setState({ anchorEl: e.currentTarget });
   }

   handleClose = () => {
       this.setState({ anchorEl: null });
   }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        return (
          <div className={classes.root} >
            <AppBar position="static" style={{backgroundColor: '#eef8ff', color: '#6cac8d'}}>
              <Toolbar>
                <IconButton 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="Menu"
                    aria-owns={ anchorEl ? 'simple-menu' : undefined }
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <Link to="/">
                      <MenuItem onClick={this.handleClose} style={{backgroundColor: '#eef8ff', color: '#6cac8d', fontFamily: 'Hind Madurai' }} >Home</MenuItem>
                    </Link>
                    <Link to="/products">
                      <MenuItem onClick={this.handleClose} style={{backgroundColor: '#eef8ff', color: '#6cac8d', fontFamily: 'Hind Madurai' }} >Catalogo</MenuItem>
                    </Link>
                    <Link to="/contact">
                      <MenuItem onClick={this.handleClose} style={{backgroundColor: '#eef8ff', color: '#6cac8d', fontFamily: 'Hind Madurai' }} >Contacto</MenuItem>
                    </Link>
                </Menu>
                <Link to="/">
                <h3>Machi</h3>
                </Link>
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