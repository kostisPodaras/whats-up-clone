import React from 'react';
import Grid from '@material-ui/core/Grid';
import MicIcon from '@material-ui/icons/Mic';
import InputBase from '@material-ui/core/InputBase';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const ChatInput = ({ classes }: Props) => (
  <Grid
    container
    alignItems="center"
    justify="space-around"
    className={classes.container}>
    <InsertEmoticonIcon />
    <InputBase
      classes={{ root: classes.inputWrapper, input: classes.input }}
      placeholder="Type a message"
    />
    <MicIcon />
  </Grid>
);

export default withStyles(styles)(ChatInput);
