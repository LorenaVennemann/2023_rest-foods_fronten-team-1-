import { Link } from "react-router-dom";
// import "./Menu.css";
import MenuItem from "./components/MenuItem";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import ResponsiveGrid from "./components/ResponsiveGrid";
import Navbar from "./components/Navbar";

function MenuPage() {
  return (
    <>
      <Navbar></Navbar>
      <ResponsiveGrid>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </ResponsiveGrid>
    </>
  );
}

export default MenuPage;
