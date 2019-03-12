import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header";
import PropTypes from "prop-types";
import getContext from "./context";

const withLayout = BaseComponent => {
  class App extends Component {
    constructor(props) {
      super(props);

      const { pageContext } = this.props;
      this.pageContext = pageContext || getContext();
    }
    componentDidMount() {
      const jssStyles = document.getElementById("jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <CssBaseline />
          <div>
            <Header {...this.props} />
            <BaseComponent {...this.props} />
          </div>
        </MuiThemeProvider>
      );
    }
  }
  App.propTypes = {
    pageContext: PropTypes.object
  };

  App.defaultProps = {
    pageContext: null
  };
  return App;
};

export default withLayout;
