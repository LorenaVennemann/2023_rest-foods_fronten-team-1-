import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import PublisherService from './service/ItemService';
import { useState } from 'react';

type MenuItem = {
  id: number;
  name: String;
  description: String;
  price: number;
};

export default function MenuItem() {
  React.useEffect(() => {
    PublisherService()
      .getAllDataFromDB()
      .then((response) => {
        setResponseData(response);
      });
  }, []);
  
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
              {MenuItem.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
          {MenuItem.description}
          {MenuItem.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
  }

