import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from './Navbar';

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
