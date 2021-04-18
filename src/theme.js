import { createMuiTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
      //   background: "#f9fafa",
    },
    background: {
      default: "#f9fafa",
    },
    secondary: {
      main: red[800],
    },
  },
});
