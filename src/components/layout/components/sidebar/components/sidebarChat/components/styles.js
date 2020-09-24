const styles = ({ palette, breakpoints }) => ({
  container: {
    padding: 6,
    cursor: 'pointer',
    borderBottom: `1px solid ${palette.borders.light}`,
    flexDirection: 'column',
    alignItems: 'center',

    [breakpoints.up('xs')]: {
      padding: 10,
    },

    [breakpoints.up(800)]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 20,
    },

    '&:hover': {
      backgroundColor: palette.hover.gray,
    },
  },
  info: {
    textAlign: 'center',

    [breakpoints.up(800)]: {
      marginLeft: 15,
    },
  },
});

export default styles;
