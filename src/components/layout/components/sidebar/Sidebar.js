import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { SidebarHeader, SidebarInput, SidebarChat } from './components';
import styles from './styles';

type Props = {
  classes: Object,
};

const Sidebar = ({ classes }: Props) => (
  <div className={classes.container}>
    <SidebarHeader />
    <SidebarInput />
    <SidebarChat />
  </div>
);

export default withStyles(styles)(Sidebar);
