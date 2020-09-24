import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const ChatHeader = ({ classes }: Props) => (
  <Grid
    container
    alignItems="center"
    justify="space-between"
    className={classes.header}>
    <Grid item className={classes.infoContainer}>
      <Avatar className={classes.avatar} />
      <div className={classes.infoText}>
        <Typography variant="body1" className={classes.roomName}>
          Room Name
        </Typography>
        <Typography variant="caption">Last message... </Typography>
      </div>
    </Grid>

    <Grid item>
      <IconButton classes={{ root: classes.icon }}>
        <DonutLargeIcon />
      </IconButton>
      <IconButton classes={{ root: classes.icon }}>
        <AttachFileIcon />
      </IconButton>
      <IconButton classes={{ root: classes.icon }}>
        <MoreVertIcon />
      </IconButton>
    </Grid>
  </Grid>
);

export default withStyles(styles)(ChatHeader);
