import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const SidebarChat = ({ classes }: Props) => (
  <Grid className={classes.container}>
    <Scrollbars
      universal
      autoHeightMax="100vh"
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
      <h1>sidebar</h1>
    </Scrollbars>
  </Grid>
);

export default withStyles(styles)(SidebarChat);
