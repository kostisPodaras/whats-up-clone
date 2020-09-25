const styles = ({ palette, breakpoints }) => ({
  container: {
    padding: '15px 5px',

    [breakpoints.up('md')]: {
      padding: '15px 10px',
    },
  },
  inputWrapper: {
    width: '70%',
    borderRadius: 15,
    fontSize: 12,
    backgroundColor: palette.common.white,

    [breakpoints.up('md')]: {
      width: '88%',
    },
  },
  input: {
    padding: 6,
  },
});

export default styles;
