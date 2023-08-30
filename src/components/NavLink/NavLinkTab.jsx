import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { CategoryNameContext } from "../Context";

function NavLinkTab({ label, path }) {
  const { categoryName, setCategoryName } = useContext(CategoryNameContext);

  const choseCategory = () => {
    setCategoryName(label);
  };

  return (
    <>
      <Link to={path} onClick={choseCategory}>
        <Typography variant="h4" color="#161616">
          {label}
        </Typography>
      </Link>
    </>
  );
}
export default NavLinkTab;
