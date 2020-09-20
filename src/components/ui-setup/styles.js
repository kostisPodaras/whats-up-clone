// Global styles
const styles = ({ palette }) => ({
  '@global': {
    // here i can put global styles like scroll behavor smooth
    html: {
      margin: 0,
    },
    body: {
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
      backgroundColor: palette.background.main,
    },
  },
});

export default styles;
