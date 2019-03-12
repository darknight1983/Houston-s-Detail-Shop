/*
  This module is for creating a theme that
  will used on the server for initial load.
*/

import { SheetsRegistry } from "react-jss";
import {
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";

// Create the theme.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000"
    },
    secodary: {
      main: "#FFF"
    }
  },
  status: {
    danger: "#ff0000"
  },
  typography: {
    useNextVariants: true
  }
});

// Create a function that return a theme object.
const createPageContext = () => ({
  theme,
  // This is needed to deduplicate the injection of CSS in the page
  sheetsManager: new Map(),
  // This is needed in order to inject the critical CSS
  sheetsRegistry: new SheetsRegistry(),
  // The standard class name generator
  generateClassName: createGenerateClassName()
});

export default () => {
  /*
    Make sure to create a new context for every sever side request so
    that data isnt shared between connections (which would be bad)
  */

  if (!process.browser) {
    return createPageContext();
  }

  if (!global.INIT_MATERIAL_UI) {
    global.INIT_MATERIAL_UI = createPageContext();
  }

  return global.INIT_MATERIAL_UI;
};
