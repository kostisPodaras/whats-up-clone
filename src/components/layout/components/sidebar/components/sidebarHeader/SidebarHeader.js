import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const SidebarHeader = ({ classes }: Props) => {
  return (
    <div className={classes.container}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.sidebarHeader}>
        <Avatar />
        <div className={classes.sidebarIcons}>
          <IconButton classes={{ root: classes.icon }}>
            <DonutLargeIcon />
          </IconButton>
          <IconButton classes={{ root: classes.icon }}>
            <ChatIcon />
          </IconButton>
          <IconButton classes={{ root: classes.icon }}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(SidebarHeader);
