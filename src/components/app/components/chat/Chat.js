import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import { ChatHeader, ChatBody, ChatInput } from './components';
import styles from './styles';

type Props = {
  classes: Object,
};

const Chat = ({ classes }: Props) => (
  <Grid container direction="column" className={classes.container}>
    <ChatHeader />
    <ChatBody />
    <ChatInput />
  </Grid>
);

export default withStyles(styles)(Chat);
