import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const App = ({ classes }: Props) => {
  return (
    <div className={classes.container}>
      <h1>appappappappappapp</h1>
      <p>wdadwa</p>
    </div>
  );
};

export default withStyles(styles)(App);
