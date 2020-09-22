import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { SidebarHeader, SidebarInput } from './components';
import styles from './styles';

type Props = {
  classes: Object,
};

const Sidebar = ({ classes }: Props) => (
  <div className={classes.container}>
    <SidebarHeader />
    <SidebarInput />
  </div>
);

export default withStyles(styles)(Sidebar);
