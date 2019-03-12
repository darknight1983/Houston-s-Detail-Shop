import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {},
  header: {}
});

const Header = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.header}>
        <Toolbar>Maine's Detail</Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
