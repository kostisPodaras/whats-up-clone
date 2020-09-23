import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const SidebarChat = ({ classes }: Props) => (
  <Grid className={classes.container}>
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
  </Grid>
);

export default withStyles(styles)(SidebarChat);
