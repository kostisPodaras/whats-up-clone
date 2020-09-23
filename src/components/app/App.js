import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const App = ({ classes }: Props) => {
  return <div className={classes.container}>{/* <p>App</p> */}</div>;
};

export default withStyles(styles)(App);
