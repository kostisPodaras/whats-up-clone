import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { SidebarHeader } from './components';
import styles from './styles';

// type Props = {
//   classes: Object,
// };

const Sidebar = () => (
  <>
    <SidebarHeader />
  </>
);

export default withStyles(styles)(Sidebar);
