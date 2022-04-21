import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/core/node_modules/@material-ui/styles";
import Commerce from "../../assets/commerce.png";
import useStyle from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyle();
  const location = useLocation();

  return (
    <div>
      <AppBar position="fixed" className={mergeClasses.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={Commerce}
              alt="commerce"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart items"
                color="inherit"
              >
                <Badge
                  badgeContent={totalItems}
                  color="secondary"
                  overlap="rectangular"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
