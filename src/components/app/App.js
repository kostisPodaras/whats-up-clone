import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Chat } from './components';
import styles from './styles';

type Props = {
  classes: Object,
};

const App = ({ classes }: Props) => {
  return (
    <div className={classes.container}>
      <Chat />
    </div>
  );
};

export default withStyles(styles)(App);
