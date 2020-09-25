import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import Message from './components';
import styles from './styles';

type Props = {
  classes: Object,
};

const ChatBody = ({ classes }: Props) => (
  <Grid className={classes.container}>
    <Scrollbars
      universal
      autoHeightMax="100vh"
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}>
      <Message />
    </Scrollbars>
  </Grid>
);

export default withStyles(styles)(ChatBody);
