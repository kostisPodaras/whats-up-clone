const styles = ({ palette }) => ({
  container: {
    margin: '20px 38px 0px 0px',
    padding: 10,
    minWidth: 100,
    borderRadius: 10,
    backgroundColor: palette.common.white,
    width: 'fit-content',
    textAlign: 'center',
    position: 'relative',
  },
  name: {
    position: 'absolute',
    top: -25,
    fontSize: 10,
    fontWeight: 800,
    color: palette.common.black,
  },
  message: {
    color: palette.text.dark,
    overflowWrap: 'breakWord',
    wordWrap: 'breakWord',
    hyphens: 'auto',
  },
  timestamp: {
    marginLeft: 10,
    fontSize: 10,
  },
});

export default styles;
