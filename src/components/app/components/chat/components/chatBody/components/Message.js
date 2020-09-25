import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Message = ({ classes }: Props) => (
  <Grid className={classes.container}>
    <p>msg</p>
  </Grid>
);

export default withStyles(styles)(Message);
