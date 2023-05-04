import { teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: teal[50],
    },
    myColor: {
      main: teal[200],
    },
  },
});
console.log(theme);
export default theme;
