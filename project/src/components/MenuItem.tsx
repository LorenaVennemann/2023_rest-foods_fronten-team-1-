<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
>>>>>>> e82fdcc4602ff33ba61a47b3135c26e092703d2a
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

<<<<<<< HEAD
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
=======
type MenuItem = {
  [x: string]: any;
  id: number;
  name: String;
  description: String;
  price: number;
};

function MenuItem() {
  return (
    <>
      <Navbar />
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/fotos-premium/ein-hamburger-mit-salat-tomate-und-zwiebel-darauf_256339-5195.jpg"
            alt="Burger"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
        
            </Typography>
            <Typography variant="body2" color="text.secondary">

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
  }
export default MenuItem;
>>>>>>> e82fdcc4602ff33ba61a47b3135c26e092703d2a
