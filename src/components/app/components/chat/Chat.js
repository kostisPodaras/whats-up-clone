import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import { ChatHeader, ChatBody } from './components';
import styles from './styles';

type Props = {
  classes: Object,
};

const Chat = ({ classes }: Props) => (
  <Grid container direction="column" className={classes.container}>
    <ChatHeader />
    <ChatBody />
    <h1>footer</h1>
  </Grid>
);

export default withStyles(styles)(Chat);
