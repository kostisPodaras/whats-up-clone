import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import ChatRoom from './components/ChatRoom';
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
      <ChatRoom addNewChat />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
    </Scrollbars>
  </Grid>
);

export default withStyles(styles)(SidebarChat);
