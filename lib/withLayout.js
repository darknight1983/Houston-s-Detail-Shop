import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header";

const withLayout = BaseComponent => {
  class App extends Component {
    render() {
      return (
        <div>
          <CssBaseline />
          <Header {...this.props} />
          <BaseComponent {...this.props} />
        </div>
      );
    }
  }

  return App;
};

export default withLayout;
