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
  <Grid className={classNames(classes.container, reciever && classes.reciever)}>
    <p className={classes.name}>Kostis Podaras</p>
    <Typography display="inline" variant="body2" className={classes.message}>
      heysd sd asd asd asdasdwwdsdaw asdwd dw sd wawasdawdas sd wddwdsa
    </Typography>
    <Typography display="inline" className={classes.timestamp}>
      3:31pm
    </Typography>
  </Grid>
);

export default withStyles(styles)(Message);
