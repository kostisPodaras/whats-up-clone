const styles = ({ palette, breakpoints }) => ({
  header: {
    padding: 10,
    height: 102,
    borderBottom: `1px solid ${palette.borders.dark}`,
    flexDirection: 'column',

    [breakpoints.up(480)]: {
      flexDirection: 'row',
      height: 68,
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 20,
  },
  roomName: {
    color: palette.common.black,
  },
  icon: {
    padding: '3px 15px 3px 7px',

    [breakpoints.up('md')]: {
      padding: 12,
    },
  },
});

export default styles;
