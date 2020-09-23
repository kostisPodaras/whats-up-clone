import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth from '@material-ui/core/withWidth';

import compose from 'core/utils/compose';

import styles from './styles';

type Props = {
  classes: Object,
  width: string,
};

const SidebarInput = ({ classes, width }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {width !== 'xs' && <SearchOutlinedIcon className={classes.icon} />}
        <TextField
          className={classes.textfield}
          classes={{ root: classes.textfieldInput }}
          label="Select or start new chat..."
          fullWidth
          InputProps={{ disableUnderline: true }}
        />
      </div>
    </div>
  );
};

export default compose(withWidth(), withStyles(styles))(SidebarInput);
