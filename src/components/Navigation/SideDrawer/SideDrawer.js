import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.css";

export default function SideDrawer(props) {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
}
