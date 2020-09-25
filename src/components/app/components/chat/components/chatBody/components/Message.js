import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
  reciever: boolean,
};

const Message = ({ classes, reciever }: Props) => (
  <div className={reciever && classes.oppositeContainer}>
    <Grid
      className={classNames(classes.container, reciever && classes.reciever)}>
      <p className={classNames(classes.name, reciever && classes.recieverName)}>
        Kostis Podaras
      </p>
      <Typography display="inline" variant="body2" className={classes.message}>
        heysd sd asd asd aawdas sd wddwdsasd sddddddd aw as da
      </Typography>
      <Typography display="inline" className={classes.timestamp}>
        3:31pm
      </Typography>
    </Grid>
  </div>
);

export default withStyles(styles)(Message);
