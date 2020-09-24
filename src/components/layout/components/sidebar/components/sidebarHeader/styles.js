const styles = ({ breakpoints, palette }) => ({
  container: {
    padding: 10,
    flexDirection: 'column',
    borderRight: `1px solid ${palette.borders.dark}`,

    [breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  sidebarIcons: {
    minWidth: '10vw',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 12,

    [breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  icon: {
    padding: 3,

    [breakpoints.up(900)]: {
      padding: 12,
    },
  },
});

export default styles;
