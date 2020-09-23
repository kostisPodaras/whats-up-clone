const styles = ({ palette, breakpoints }) => ({
  container: {
    padding: 5,
    backgroundColor: '#f6f6f6',

    [breakpoints.up('sm')]: {
      padding: 10,
    },
  },

  textfieldInput: {
    '& .MuiInputBase-input': {
      height: '3.4em',

      [breakpoints.up('sm')]: {
        height: '2.4em',
      },

      [breakpoints.up('md')]: {
        height: '1.4em',
      },
    },

    '& .MuiFormLabel-root': {
      color: palette.text.primary,
    },

    ' & .MuiFormLabel-root': {
      fontSize: 13,

      [breakpoints.up('360')]: {
        fontSize: 16,
      },
    },

    '&:after': {
      left: -31,
    },
  },

  wrapper: {
    backgroundColor: palette.common.white,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    margin: '10px 4px 0 4px',
  },
});

export default styles;
