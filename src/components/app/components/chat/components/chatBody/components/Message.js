import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Message = ({ classes }: Props) => (
  <Grid className={classes.container}>
    <p className={classes.name}>Kostis Podaras</p>
    <Typography display="inline" variant="body2" className={classes.message}>
      hdwdaa sdasdasdasdasdasaaa hdwdaa hdw
    </Typography>
    <Typography display="inline" variant="test" className={classes.timestamp}>
      3:31pm
    </Typography>
  </Grid>
);

export default withStyles(styles)(Message);
