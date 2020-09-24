import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import { ChatHeader } from './components';
import styles from './styles';

// type Props = {
//   classes: Object,
// };

const Chat = () => (
  <Grid>
    <ChatHeader />
  </Grid>
);

export default withStyles(styles)(Chat);
