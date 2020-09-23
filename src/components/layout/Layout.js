import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import { Sidebar } from './components';
import styles from './styles';

type Props = {
  classes: Object,
  children: HTMLElement | Object | [],
};

const Layout = ({ children, classes }: Props) => (
  <div className={classes.app}>
    <Paper elevation={5} className={classes.container}>
      <Sidebar />
      <Scrollbars
        universal
        autoHeightMax="100vh"
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}>
        <Grid>{children}</Grid>
      </Scrollbars>
    </Paper>
  </div>
);

export default withStyles(styles)(Layout);
