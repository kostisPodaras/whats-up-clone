import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Sidebar = ({ classes }: Props) => {
  return (
    <div className={classes.container}>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
    </div>
  );
};

export default withStyles(styles)(Sidebar);
