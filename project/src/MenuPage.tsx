import "./Menu.css";
import MenuItem from "./components/MenuItem";
import ResponsiveGrid from "./components/ResponsiveGrid";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import PublisherService from "./components/service/ItemService";
import ItemService from "./components/service/ItemService";

function MenuPage() {
  const [responseData, setResponseData] = useState<MenuItem[]>([]);

  useEffect(() => {
    PublisherService()
      .getAllDataFromDB()
      .then((data) => {
        setResponseData(data);
      });
  }, []);

  return (

    <div className="menu">
      <Navbar></Navbar>
      <ResponsiveGrid>
      <div>
      {responseData.map((data: MenuItem) => (
        <Card key={data.id}>
          {data.name}
          <br></br>
          {data.date.toString()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => ItemService().getDataFromDB(Number(data.id))}
          >
            Delete
          </button>
        </Card>
      ))}
    </div>
      </ResponsiveGrid>
      </div>
  
  );
}

export default MenuPage;
