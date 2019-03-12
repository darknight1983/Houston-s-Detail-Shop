import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    marginTop: 64
  },
  img1: {
    backgroundImage: "url(../static/imgs/White_Benz.jpg)",
    minHeight: 600,
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  }
});

const IndexContent = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.img1}>
        <span className={classes.text}>Maine's Detail</span>
      </div>
      <section className={classes.sec1}>
        <h2>A grid will go here1</h2>
      </section>
    </div>
  );
};

export default withStyles(styles)(IndexContent);
