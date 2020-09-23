import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const ChatRoom = ({ classes }: Props) => (
  <div className={classes.container}>
    <Avatar />
    <Typography variant="h6">Room Name </Typography>
    <Typography variant="caption">Last message... </Typography>
  </div>
);

export default withStyles(styles)(ChatRoom);
