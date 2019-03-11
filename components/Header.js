import React from "react";
import {
  AppBar,
  ToolBar,
  Typography,
  Grid,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {}
});

const Header = props => {
  const { classes } = props;
  return (
    <div>
      <h1>This will be the header.</h1>
    </div>
  );
};

export default withStyles(styles)(Header);
