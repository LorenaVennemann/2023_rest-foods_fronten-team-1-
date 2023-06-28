import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import Burger from "./components/Burger";
import BurgerService from "./components/service/BurgerService";

function BurgerPage() {
  const [responseData, setResponseData] = useState<Burger[]>([]);

  useEffect(() => {
    BurgerService()
      .getAllBurgers()
      .then((data: React.SetStateAction<Burger[]>) => {
        setResponseData(data);
      });
  }, []);

  return (
    <div>
      {responseData.map((data: Burger) => (
        <Card key={data.id}>
          {data.name}
          <br></br>
          {data.beschreibung}
          <br></br>
          {data.preis}
        </Card>
      ))}
    </div>
  );
}

export default BurgerPage;