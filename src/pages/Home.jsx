import React, { useState } from 'react'
import Base from '../components/Base.jsx'
import { Box, Button, Card, CardActionArea, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SendIcon from '@mui/icons-material/Send';
import Kids from '../assets/images/Girls/10.jpg';
import women from '../assets/images/Women/044.jpg';
import mens from '../assets/images/05.jpg';
import infant from '../assets/images/Infants/09.jpg';
import { useNavigate } from 'react-router-dom';
import welcome from '../assets/images/welcome.jpg';
import infra from '../assets/images/infra.jpg';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import img1 from '../assets/images/Factory 2x.jpg';
import img2 from '../assets/images/Women 2.jpg';
import img3 from '../assets/images/Boys 2x.jpg';
import img4 from '../assets/images/Girls 2x.jpg';
import img5 from '../assets/images/Infants 2x.jpg';
import img6 from '../assets/images/Women 2x.jpg';
import img7 from '../assets/images/Boys 2x (1).jpg';
import img8 from '../assets/images/Girls jpg hq.jpg';
import client from '../assets/images/client.svg';
import clientMob from '../assets/images/clientMob.svg';
import wdc from '../assets/images/Certification/WDC.png';
import bsci from '../assets/images/Certification/bsci-certification-250x250.png';
import sedex from '../assets/images/Certification/sedex.png';
import uni from '../assets/images/Certification/uni.png';

const Home = () => {
  const navigate = useNavigate();
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
    <Base>
    <div className='corusel'>
     <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      navigation
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Paper elevation={0}>
        <img
          src={img1}
          alt='MA Apparels'
          style={{ width: '100%', display: 'block' }}
        />
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper elevation={0}>
        <img
          src={img2}
          alt='MA Apparels'
          style={{ width: '100%', display: 'block' }}
        />
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper elevation={0}>
        <img
          src={img3}
          alt='MA Apparels'
          style={{ width: '100%', display: 'block' }}
        />
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper elevation={0}>
        <img
          src={img4}
          alt='MA Apparels'
          style={{ width: '100%', display: 'block' }}
        />
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper elevation={0}>
        <img
          src={img5}
          alt='MA Apparels'
          style={{ width: '100%', display: 'block' }}
        />
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper elevation={0}>
        <img
          src={img6}
          alt='MA Apparels'
          style={{ width: '100%', display: 'block' }}
        />
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper elevation={0}>
        <img
          src={img7}
          alt='MA Apparels'
          style={{ width: '100%', display: 'block' }}
        />
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper elevation={0}>
        <img
          src={img8}
          alt='MA Apparels'
          style={{ width: '100%', display: 'block' }}
        />
        </Paper>
      </SwiperSlide>
    </Swiper>
    </div>
    
    <Paper elevation={0} sx={{ backgroundColor: '#F40B4B', width: '100%', height: '5px', mb: 0.5, display: { xs:'none', sm: 'none', md: 'block' }, borderRadius: 0 }}/>
    <Paper elevation={0} sx={{ backgroundColor: '#0D003F', width: '100%', height: '10px', display: { xs:'none', sm: 'none', md: 'block' }, borderRadius: 0 }}/>
    <Paper elevation={0} sx={{ backgroundColor: '#F40B4B', width: '100%', height: '4px', mb: 0.5, display: { xs:'block', sm: 'block', md: 'none' }, borderRadius: 0 }}/>
    <Paper elevation={0} sx={{ backgroundColor: '#0D003F', width: '100%', height: '8px', display: { xs:'block', sm: 'block', md: 'none' }, borderRadius: 0 }}/>
<div className='home-body'>
  <Paper elevation={0} sx={{ pt: 5, }} className='logopic'>
    <Grid container spacing={3}>
    <Grid item xs={12} md={6} lg={6}>
  <Paper elevation={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 2 }}>
    <img
      src={welcome}
      alt='Welcome'
      style={{ maxHeight: '100%', maxWidth: '100%', display: 'block' }}
    />
  </Paper>
</Grid>

        <Grid item xs={12} md={6} lg={6} sx={{ my: 3, }}>
        <Typography style={{ fontWeight: 'bold', fontFamily: 'poppins', fontSize: '32px', justifyContent: 'center', display: 'flex', color: '#0D003F' }} sx={{ mr: 3, ml: 3 }} variant='bullet'>Welcome to MA Apparels</Typography>         
        <Typography variant='body2' style={{ fontSize: '15px', fontFamily: 'poppins', justifyContent: 'center', display: 'flex', color: '#0D003F' }} sx={{ mr: 3, mt:3, ml: 3 }}>
                We offer an exclusive range of knitted garments, kids knitted garments, ladies knitted garments and men's knitted garments. The garments are made from superior quality materials and are very durable.
        </Typography>
        <Typography variant='body2' sx={{ mr: 3, mt: 3, ml: 3 }} style={{ fontSize: '15px', fontFamily: 'poppins', justifyContent: 'center', display: 'flex', color: '#0D003F' }}>
                We are always abreast with the latest fashion trends and thus we are the first choice when it comes to fashion and good quality. Incepted in the year 1995, we “MA Apparels” is  one of our group of companies, which is a highly acclaimed name in the knitted garment industry. Our valuable industry experience as well as availability of technically advanced machinery equipment has helped us to deliver an exquisite range of knitted garments that are known for their styles, colors and innovative patterns.
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '25px' }}>
          <Button variant="outlined" onClick={() => navigate('/about')} style={{ fontFamily: 'poppins' }} sx={{ borderColor: '#F40B4B','&:hover': { borderColor: '#F40B4B', backgroundColor: '#FFE5E5' }, color: '#F40B4B' }}>
            Read More
          </Button>
  </div>
        </Grid>
      </Grid>
  </Paper>

<div >
      {/* Certificate */}
      <Grid item xs={12} md={12} lg={12} sx={{ my: 2 }} >
        <Typography style={{ fontWeight: 'bold', fontSize: '30px', justifyContent: 'center', display: 'flex', color: '#2F4858' }} variant='bullet'>CERTIFICATIONS</Typography>
    </Grid>

    <Grid item xs={12} md={12} lg={12} sx={{ mx: { xs: 0, md: 15 } }} >
    <Grid container spacing={3}>

<Grid item xs={6} sm={4} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <Box elevation={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img
    src={wdc}
    alt='Certificate'
    style={{ maxWidth: '50%', height: 'auto', display: 'flex' }}
  />
</Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <Box elevation={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img
    src={bsci}
    alt='Certificate'
    style={{ maxWidth: '50%', height: 'auto', display: 'flex' }}
  />
</Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <Box elevation={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img
    src={sedex}
    alt='Certificate'
    style={{ maxWidth: '40%', height: 'auto', display: 'flex' }}
  />
</Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <Box elevation={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img
    src={uni}
    alt='Certificate'
    style={{ maxWidth: '50%', height: 'auto', display: 'flex' }}
  />
</Box>
      </Grid>

          </Grid>
    </Grid>

{/* products */}
    <Paper elevation={0} className= 'explore' sx={{ mt: 5, p: 5, mx: -1 }}>
    <Typography style={{ fontWeight: 'bold', fontSize: '28px', justifyContent: 'center', display: 'flex', color: '#FFFFFF', marginBottom: '50px' }} variant='bullet'>EXPLORE</Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} md={3} lg={3}>
        <Card sx={{ maxWidth: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(0.95)' } }}>
      <CardActionArea onClick={()=> navigate('/women')}>
        <CardMedia
          component="img"
          height="400"
          image= {women}
          style={{ height: '100%', maxHeight: '100%' }}
          alt="Women"
        />
<Box sx={{
          position: 'absolute',
          bottom: '0', 
          left: '0',
          right: '0',
          margin: '0 auto', 
          color: 'white',
          backgroundColor: 'rgba(244, 11, 75, 0.7)',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <div className='menucard' style={{ 
                    color: 'white',
                    padding: '6px 0px' ,
                    textAlign: 'center',
                    fontSize: '20px',
                        }} >Women</div>
        </Box>
      </CardActionArea>
    </Card>
    </Grid>
        
    <Grid item xs={12} md={3} lg={3}>
        <Card sx={{ maxWidth: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(0.95)' } }}>
      <CardActionArea onClick={()=> navigate('/men')}>
        <CardMedia
          component="img"
          height="400"
          image= {mens}
          style={{ height: '100%', maxHeight: '100%' }}
          alt="Men"
        />
<Box sx={{
          position: 'absolute',
          bottom: '0', 
          left: '0',
          right: '0',
          margin: '0 auto', 
          color: 'white',
          backgroundColor: 'rgba(244, 11, 75, 0.7)',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <div className='menucard' style={{ 
                    padding: '6px 0px' ,
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '20px',
                        }} >Men</div>
        </Box>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={12} md={3} lg={3}>
        <Card sx={{ maxWidth: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(0.95)' } }}>
      <CardActionArea onClick={()=>navigate('/kids/girls')}>
        <CardMedia
          component="img"
          height="400"
          image={Kids}
          style={{ height: '100%', maxHeight: '100%' }}
          alt="Kids"
        />
<Box sx={{
          position: 'absolute',
          bottom: '0', 
          left: '0',
          right: '0',
          margin: '0 auto', 
          color: 'white',
          backgroundColor: 'rgba(244, 11, 75, 0.7)',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <div className='menucard' style={{ 
                    padding: '6px 0px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '20px',
                        }} >Kids</div>
        </Box>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={12} md={3} lg={3}>
        <Card sx={{ maxWidth: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(0.95)' } }}>
      <CardActionArea onClick={()=>navigate('/infants')}>
        <CardMedia
          component="img"
          height="400"
          image={infant}
          style={{ height: '100%', maxHeight: '100%' }}
          alt="Infant"
        />
        <Box sx={{
          position: 'absolute',
          bottom: '0', 
          left: '0',
          right: '0',
          margin: '0 auto', 
          color: 'white',
          backgroundColor: 'rgba(244, 11, 75, 0.7)',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <div className='menucard' style={{ 
                    padding: '6px 0px' ,
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '20px',
                        }} >Infant</div>
          </Box>
      </CardActionArea>
    </Card>
    </Grid>

      </Grid>
    </Paper>
                  
  {/* Clients */}
  <Typography style={{ fontWeight: 'bold', fontSize: '28px', justifyContent: 'center', display: 'flex', color: '#1F294F', marginTop: '60px', marginBottom: '50px' }} variant='bullet'>OUR CLIENTS</Typography>
  {/* <Grid container spacing={2}>
                  {Object.keys(images).map((imageKey, index) => (
                    <Grid item xs={6} sm={4} md={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={index}>
     <Paper elevation={0} sx={{ backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', width: '50%' }}>
  <img
    src={images[imageKey]}
    alt='Clients'
    style={{ maxHeight: '90%', maxWidth: '80%', display: 'flex', }}
  />
</Paper>
      </Grid>
        ))}
        </Grid> */}

<Box sx={{ px: 5, display: { xs: 'none', md: 'flex' } }}>
<img
    src={client} 
    alt='Client'
    style={{ width: '100%', height: 'auto', }} 
  />
</Box>
<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
<img
    src={clientMob} 
    alt='Client'
    style={{ width: '100%', height: 'auto', }} 
  />
</Box>
</div>

{/* Infrastructure */}
<ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
  <Card sx={{ width: '100%', mb: 6, mt: 10 }}>
    <CardMedia
      sx={{ height: { xs: 600, sm: 550, md: 400 }, position: 'relative' }}
      image={infra}
      title="Infrastructure"
    >
      <Typography
        variant="h4"
        style={{ fontFamily: 'poppins' }}
        sx={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '500px',
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#F40B4B',
          padding: '10px 20px',
        }}
      >
        OUR INFRASTRUCTURE
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          color: 'white',
          fontSize: '20px',
          top: '50%', // Center vertically
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          justifyContent: 'center',
          alignItems: 'center', // Center content vertically
          mt: 5
        }}
      >
        <Grid item xs={6} sm={6} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ m: 2, padding: '10px 20px', textAlign: 'center' }}>
           
            {counterOn && 
            <Typography variant='bullet' sx={{ fontSize: '24px' }}>
              <CountUp start={0} end={10000} duration={2} delay={0} />
            </Typography>}             
            <Typography variant='bullet' sx={{ fontSize: '18px', m: 1 }}>
             pcs/day
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '20px', mt: 2 }}>
              Production Capacity
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ m: 2, padding: '10px 20px', textAlign: 'center' }}>
            
            {counterOn && 
            <Typography variant='bullet' sx={{ fontSize: '24px' }}>
              <CountUp start={0} end={1000} duration={2} delay={0} />
            </Typography>}
            <Typography variant="h4" sx={{ fontSize: '20px', mt: 2 }}>
              No of Machinery
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ m: 2, padding: '10px 20px', textAlign: 'center' }}>

            {counterOn && 
            <Typography sx={{ fontSize: '24px' }} variant='bullet'>
              <CountUp start={0} end={1050} duration={2} delay={0} />
            </Typography>}
            <Typography variant="h4" sx={{ fontSize: '20px', mt: 2 }}>
              Skilled Workers
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ m: 2, padding: '10px 20px', textAlign: 'center' }}>
            
            {counterOn && 
            <Typography sx={{ fontSize: '24px' }} variant='bullet'>
              <CountUp start={0} end={2} duration={2} delay={0} />
            </Typography>}
            <Typography variant="h4" sx={{ fontSize: '20px', mt: 2 }}>
              No of Units
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CardMedia>
  </Card>
</ScrollTrigger>

{/* Contact */}
<Grid item sx={{ m: 4, textAlign: 'center' }} xs={12} md={12} lg={12}>
      <Typography variant='h4' style={{ fontFamily: 'poppins', fontSize: '28px' }} sx={{ fontWeight: 'bold', color: '#1F294F' }}>
        Reach out to us!
      </Typography>
      <Button variant="contained" elevation={0} onClick={()=> navigate('/contactus')} sx={{ backgroundColor: '#F5B653', mt: 3, '&:hover': { backgroundColor: '#F5B653', } }} endIcon={<SendIcon />}>
        Drop us a line
      </Button>
      <Typography variant='body2' style={{ fontFamily: 'poppins', fontSize: '14px' }} sx={{ color: '#0D003F', m: 1, mt: 3 }}>
      Ready to start a conversation? 
      </Typography>
      <Typography variant='body2' style={{ fontFamily: 'poppins', fontSize: '14px' }} sx={{ color: '#0D003F', m: 1, my: -1 }}>
      We're just a click away! 
      </Typography>
    </Grid>

</div>
    </Base>
    </>
  )
}

export default Home