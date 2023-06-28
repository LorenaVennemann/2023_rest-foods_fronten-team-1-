import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from './Navbar';
import { Burger } from './Types/Burger';
import BurgerService from './service/BurgerService';
import { Link } from 'react-router-dom';

const burgerService = BurgerService();

export default function MenuItem() {
  const [burgers, setBurgers] = useState<Burger[]>([]);

  useEffect(() => {
    burgerService.getAllBurgers().then((data) => {
      setBurgers(data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      <Navbar />
      {burgers.map(burger => (
        <Card key={burger.id} sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to={`/burger/${burger.id}`}>
            <CardMedia
              component="img"
              height="140"
              image={burger.image}
              alt={burger.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {burger.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {burger.description}, {burger.price} Euro
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}