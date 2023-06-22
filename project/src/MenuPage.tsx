import "./Menu.css";
import MenuItem from "./components/MenuItem";
import ResponsiveGrid from "./components/ResponsiveGrid";
import Navbar from "./components/Navbar";

function MenuPage() {
  return (
    <>
    <div className="menu">
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
      </div>
    </>
  );
}

export default MenuPage;
