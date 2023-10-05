import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { CategoryNameContext } from "../Context";

function NavLinkTab({ label, path }) {
  const { categoryName, setCategoryName } = useContext(CategoryNameContext);

  const choseCategory = () => {
    setCategoryName(label);
  };

  return (
      <NavLink to={path} onClick={choseCategory} >
        <Typography variant="h4" color="#161616" px={'2px'}>
          {label}
        </Typography>
      </NavLink>
  );
}
export default NavLinkTab;
