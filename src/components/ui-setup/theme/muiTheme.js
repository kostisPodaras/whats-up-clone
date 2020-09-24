import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import palette from './palette';
import typography from './typography';

const theme = (mode) => {
  const muiTheme = createMuiTheme({
    MuiWithWidth: {
      initialWidth: 'lg', // Breakpoint being globally set 🌎!
    },

    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: { xs: 320, sm: 768, md: 960, lg: 1280, xl: 1920 },
    },
    palette: { ...palette, type: mode },
    typography: { ...typography },
    // or typography
    app: {
      maxWidth: '90vw',
      minWidth: 320,
      sideBarWidth: '35vw',
      chatRoomWidth: '75vw',
    },
  });
  return muiTheme;
};

if (
  typeof window !== 'undefined' &&
  process.env.NODE_ENV === 'development' &&
  process.env.NODE_ENV !== 'test'
) {
  /* eslint-disable no-console */
  console.log('--- THEME ---', theme());
}

export default theme;
