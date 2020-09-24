import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import withStyles from '@material-ui/core/styles/withStyles';

import { getRandomInt } from './utils';
import styles from './styles';

type Props = {
  classes: Object,
  addNewChat: boolean,
};

const ChatRoom = ({ classes, addNewChat }: Props) => (
  <>
    {!addNewChat ? (
      <Grid container className={classes.container}>
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${getRandomInt(
            1000,
          )}.svg`}
        />
        <div className={classes.info}>
          <Typography variant="body1">Room Name </Typography>
          <Typography variant="caption">Last message... </Typography>
        </div>
      </Grid>
    ) : (
      <div className={classes.container}>
        <Typography variant="body1">Add new chat </Typography>
      </div>
    )}
  </>
);

export default withStyles(styles)(ChatRoom);
