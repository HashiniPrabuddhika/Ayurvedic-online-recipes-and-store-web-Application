import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../Footer'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { AiFillCloseCircle } from 'react-icons/ai';
import './style.css'



const cards = [
  {
    id: 1,
    title: 'Tulsi Theory',
    description: 'Ayurvedic remedies to Cough and Cold',
    imageUrl: "/images/Thulsi.png",
  },
  {
    id: 2,
    title: 'DIY Ayurvedic face mask recipes',
    description: 'Ayurvedic remedies for facials',
    imageUrl: "/images/face.png",
  },

  {
    id: 3,
    title: 'Amla Theory',
    description: 'Ayurvedic remedies to hair fall',
    imageUrl: "/images/Amala.png",
  },

];



const leftSideDescription = (
  <Box
    sx={{
      flex: 1,
      padding: '20px',
      marginTop: '20px',
      background: 'linear-gradient(139deg, #e6e9e9, #f5f5f9)',
      maxWidth: '300px',
      marginLeft: '20px',

    }}
  >
    <Typography variant="h4">Ayurveda</Typography>
    <Typography variant="h4"></Typography>
    <Typography variant="body1">
      Ayurveda, an ancient system of medicine that originated in India over 5,000 years ago, offers a wealth of knowledge on how to maintain and
      restore balance in the body, mind, and spirit. In Ayurveda, food is considered not only a source of nourishment but also a form of medicine. Ayurvedic recipes focus on using natural ingredients and spices to create dishes that promote balance, health, and vitality.
    </Typography>
  </Box>
);



const defaultTheme = createTheme();

export default function Products() {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false)
  const detailPage = (Products) => {
    setDetail([{ ...Products }])
    setClose(true)
    window.scrollTo(0, 0);
  }
  return (
    <div>
      {close ?
        <div className="detail_container">
          <div className="detail_content">
            <button className='close' onClick={() => setClose(false)}><AiFillCloseCircle /></button>
            {detail && detail.map((card) => (
              <div key={card.id}>
                <div className="detail_info">
                  <TransformWrapper>
                    <TransformComponent>
                      <img src={card.imageUrl} alt={card.title} />
                    </TransformComponent>
                  </TransformWrapper>
                  <div className='product_details'>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> : null
      }

      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative">

        </AppBar>
        <main>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            {leftSideDescription}


            <Container sx={{ py: 8, flex: 1, marginLeft: '-60px' }} maxWidth="md">
              <Grid container spacing={4} sx={{ marginLeft: '150px' }}>
                {cards.map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 1px 1px rgba(10, 0, 0, 0.2)', background: 'linear-gradient(135deg, #FFA999, #C3FFD9)', }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>

                        <TransformWrapper>
                          <TransformComponent>
                            <img
                              src={card.imageUrl}
                              alt={card.title}
                              style={{
                                width: '100%',
                                height: '50%',
                                display: 'block',
                                margin: '12px auto 0',
                              }}
                            />
                          </TransformComponent>
                        </TransformWrapper>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.title}
                        </Typography>
                        <Typography>
                          {card.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          sx={{
                            background: 'black',
                            borderRadius: '5px',
                            color: 'white',
                            fontWeight: 'bold',
                            marginRight: '50px',
                          }}
                          size="medium"
                          onClick={() => detailPage(card)}
                        >
                          View
                        </Button>

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </main>
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        </Box>
      </ThemeProvider>
      <div><Footer /></div>
    </div>
  );
}