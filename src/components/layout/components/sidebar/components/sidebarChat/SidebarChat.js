import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import compose from 'core/utils/compose';

import withDbData from './withDbData';
import ChatRoom from './components/ChatRoom';
import styles from './styles';

type Props = {
  classes: Object,
  rooms: Array,
};

const SidebarChat = ({ classes, rooms }: Props) => {
  return (
    <Grid className={classes.container}>
      <Scrollbars
        universal
        autoHeightMax="100vh"
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}>
        <ChatRoom addNewChat />
        {rooms.map((room) => (
          <ChatRoom key={room.id} roomName={room.data.name} />
        ))}
      </Scrollbars>
    </Grid>
  );
};

export default compose(withDbData, withStyles(styles))(SidebarChat);
