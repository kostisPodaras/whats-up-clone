const styles = ({ breakpoints }) => ({
  container: {
    backgroundImage:
      'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    padding: '0px 25px',
    flex: 1,

    [breakpoints.up('md')]: {
      padding: '0px 30px',
    },
  },
});

export default styles;
