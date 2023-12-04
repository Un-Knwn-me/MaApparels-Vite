import React, { useState, useEffect } from 'react'
import Base from '../components/Base.jsx'
import { Button, Card, CardActionArea, CardMedia, Container, Dialog, Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const WomenNightWear = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {
      const importImages = async () => {
        const imageContext = import.meta.glob("../assets/images/Women/*");
        const paths = await Promise.all(
          Object.keys(imageContext).map(async (path) => {
            const mod = await imageContext[path]();
            return mod.default;
          })
        );
        setImagePaths(paths);
      };
  
      importImages();
    }, []);

    const handleClickOpen = (imageKey) => {
      setSelectedImage(imageKey);
      setOpen(true);
    };
  
    const handleClose = () => {
      setSelectedImage(null);
      setOpen(false);
    };
  
    return (
      <Base>
        <div className='product'>
          <Container>
            <Grid container spacing={3} sx={{ pt: 5 }}>
              <Grid sx={{ mt: -3, mb: 2 }} item xs={12} md={12} lg={12}>
                <Typography style={{ fontWeight: 'bold', fontSize: '28px', justifyContent: 'center', display: 'flex', color: '#2F4858' }} variant='bullet'>Women</Typography>
              </Grid>

              <Grid item xs={6} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="outlined" onClick={()=>navigate('/women/casual')} style={{ width: '100%', borderColor: '#F40B4B', color: '#F40B4B' }}>Casual Wear</Button>
            </Grid>
            <Grid item xs={6} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="contained" onClick={()=>navigate('/women/freestyle')} style={{ backgroundColor: '#F40B4B', width: '100%' }}>Night Wear</Button>
            </Grid>
              
              <Grid sx={{ m: 5 }} item xs={12} md={12} lg={12}>
              <Grid container spacing={3}>
                {imagePaths.map((image, index) => (
                  <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardActionArea onClick={() => handleClickOpen(index)}>
                        <CardMedia
                          component="img"
                          height="300"
                          src={image}
                          alt={`Image ${index}`}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "10px",
                            color: "rgb(190, 190, 190)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            padding: "5px 10px",
                            borderRadius: "5px",
                          }}
                        >
                          Products by MA
                        </div>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
  
        <Dialog
        open={open}
        onClose={handleClose}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      >
        <img
          style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }}
          src={imagePaths[selectedImage]}
          alt="Men's Fashion"
        />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            color: "rgb(190, 190, 190)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          Products by MA
        </div>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </Dialog>
      </Base>
    );
  }

export default WomenNightWear;