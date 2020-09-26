import React from 'react';
import Grid from '@material-ui/core/Grid';
import MicIcon from '@material-ui/icons/Mic';
import InputBase from '@material-ui/core/InputBase';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import withStyles from '@material-ui/core/styles/withStyles';

import compose from 'core/utils/compose';
import { withModelProps } from 'core/components';
import { getRooms } from 'models/rooms';

import styles from './styles';

type Props = {
  classes: Object,
  getRooms: () => {},
};

const ChatInput = ({ classes, getRooms }: Props) => (
  <Grid
    container
    alignItems="center"
    justify="space-between"
    className={classes.container}>
    <InsertEmoticonIcon />
    <InputBase
      classes={{ root: classes.inputWrapper, input: classes.input }}
      placeholder="Type a message"
    />
    <MicIcon />
    <button type="button" onClick={getRooms}>
      click
    </button>
  </Grid>
);

export default compose(
  withModelProps({ getRooms }),
  withStyles(styles),
)(ChatInput);
