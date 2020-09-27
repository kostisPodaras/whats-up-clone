import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

import { getRandomInt } from './utils';
import styles from './styles';
import db from '../../../../../../../firebase';

type Props = {
  classes: Object,
  addNewChat: boolean,
  roomName: string,
};

const ChatRoom = ({ classes, addNewChat, roomName }: Props) => {
  const [open, setOpen] = useState(false);
  const [chatName, setChatName] = useState('');

  const createChat = () => {
    if (chatName) {
      db.collection('rooms').add({
        name: chatName,
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!addNewChat ? (
        <Grid container className={classes.container}>
          <Avatar
            src={`https://avatars.dicebear.com/api/human/${getRandomInt(
              1000,
            )}.svg`}
          />
          <div className={classes.info}>
            <Typography variant="body1">{roomName}</Typography>
            <Typography variant="caption">Last message... </Typography>
          </div>
        </Grid>
      ) : (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add new chat
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogContent>
              <DialogContentText>Add new chat room</DialogContentText>
              <TextField
                onChange={(e) => setChatName(e.target.value)}
                autoFocus
                label="Chat Name"
                type="text"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  createChat();
                  handleClose();
                }}
                color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(ChatRoom);
