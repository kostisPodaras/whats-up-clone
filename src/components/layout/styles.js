const styles = ({ palette, app }) => ({
  app: {
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: palette.background.main,
  },
  container: {
    backgroundColor: palette.background.lightGray,
    height: '90vh',
    width: app.maxWidth,
    display: 'flex',
  },
});

export default styles;
