import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/categories/categorySlice";

function NavLinkTab({ label, path, id }) {
  const dispatch = useDispatch();

  const choseCategory = () => {
    dispatch(setCategoryId(id))
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
