import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const App = ({ classes }: Props) => {
  return (
    <div className={classes.container}>
      <div>
        <p>Header</p>
      </div>

      <div>
        <p>chat body</p>
      </div>

      <div>
        <p>footer</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
