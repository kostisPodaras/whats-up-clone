const styles = ({ palette, breakpoints }) => ({
  container: {
    padding: 5,
    backgroundColor: '#f6f6f6',

    [breakpoints.up('md')]: {
      padding: 10,
    },
  },

  textfieldInput: {
    '& .MuiInputBase-input': {
      height: '3.4em',

      [breakpoints.up('md')]: {
        height: '2.4em',
      },

      [breakpoints.up('xmd')]: {
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
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    margin: '10px 4px 0 4px',
  },
});

export default styles;
