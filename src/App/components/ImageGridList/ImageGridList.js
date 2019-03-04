import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import {imageData} from '../../../imageData';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: 700,
    },
  });

  function ImageGridList(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={120} className={classes.gridList} cols={2}>
          {imageData.map(img => (
            <GridListTile key={img.img} cols={img.cols || 1}>
              <img src={img.img} alt={img.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
  
  ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(ImageGridList);