import React, { useRef, useState, useEffect } from 'react';
import Base from '../components/Base';
import { Box, Button, Container, Fab, Grid, Paper, TextField, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Banner1 from '../assets/images/Conatct Banner.jpg';
import Banner2 from '../assets/images/con ban.jpg';

const Contact = () => {
  const form = useRef();
  const [verified, setVerified] = useState(false);

  // emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
          toast.success('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
          toast.error('Error Sending Message');
      });
  };

  // captcha
  const onChange = () => {
    setVerified(true);
  };

  // whatsapp
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Base>
      <div className='about'>
        
      <Fab size="medium"
  variant="extended"
  onClick={() => openInNewTab('https://wa.me/+919943380777')}
  sx={{
    backgroundColor: '#25D366',
    position: 'fixed', // Set position to fixed
    top: '410px',     // Adjust the top value to position it as desired
    right: '20px',    // Add right value to position it to the right
    '&:hover': {
      backgroundColor: '#25D366',
      '& .text': {    // Target the text element within the Fab on hover
        display: 'block',
      },
    },
    color: 'white',
  }}
>
  <WhatsAppIcon />
  <Typography className="text" sx={{ display: 'none', ml: 1 }}>WhatsApp</Typography> 
</Fab>

<Paper sx={{ maxWidth: '100%', mt: -4, display: { xs: 'none', md: 'flex' } }}>
  <img 
    src={Banner1}
    alt='Ma Apparels'
    style={{ width: '100%', height: 'auto', marginBottom: -6 }}
    className="hidden-xs"
  />
  </Paper>
  <Paper sx={{ maxWidth: '100%', mt: -3, display: { xs: 'flex', md: 'none' } }}>
 <img
    src={Banner2} 
    alt='Ma Apparels'
    style={{ width: '100%', height: 'auto', marginBottom: -6 }} 
  />
</Paper>

<Container sx={{ pt: 10, mt: -3, pb: 5 }}>
  <Grid container spacing={1}>

    <Grid item xs={12} md={6} lg={6} >
      <Paper elevation={2} sx={{ p: 4, borderRadius: '8px', py: 6 }}>
        {/* Form Section */}
           <form ref={form} onSubmit={sendEmail}>
             <Grid container spacing={3} sx={{ mr: 2 }}>
             <Grid item xs={12}>
             <Typography
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          justifyContent: 'center',
          display: 'flex',
          color: '#F40B4B',
        }}
        variant='bullet'
      >
        Write to Us!
      </Typography>
      </Grid>

              <Grid item xs={12}>
                <TextField required variant="outlined" name="user_name" type="text" label="Full Name" sx={{ backgroundColor: '#EBF5FA' }} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField required variant="outlined" name="user_email" type="email" label="Email Address" sx={{ backgroundColor: '#EBF5FA' }} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField required variant="outlined" name="message" label="Your Message" multiline sx={{ backgroundColor: '#EBF5FA' }} fullWidth rows={6} />
              </Grid>
              <Grid item xs={12}>
              <ReCAPTCHA className="g-recaptcha" sitekey="6LfJa_gnAAAAAFc70MGXPmQTFA9SyfIVA_XkD_bM" onChange={onChange} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" value="Send" variant="contained" disabled={!verified} sx={{ backgroundColor: '#F5B653', '&:hover': { backgroundColor: '#F5B653' }, justifyContent: 'center', alignItem: 'center' }} fullWidth>
                  Send Message
                </Button>
              </Grid>              
            </Grid>                    
          </form>
      </Paper>
  </Grid>

  <Grid item xs={12} md={6} lg={6}>
    <Paper elevation={0} className="background-image" >
    <Box sx={{ mt: { xs: 3, md: 0 }, pt: 2, }} >
             <Typography
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          justifyContent: 'center',
          display: 'flex',
          color: '#FFF',
          marginBottom: '20px',
          marginTop: '5px'
        }}
        variant='bullet'
      >
        Visit Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6} >
          <Box sx={{ ml: { xs: 3, md: 5 } }}>
          <Typography sx={{ mb: 1, display: 'flex', alignItems: 'left', color: '#FFF' }} color="text.secondary">
           Unit - 1
          </Typography>
          <Typography variant="h6" style={{ color: '#FFF' }} sx={{ display: 'flex', alignItems: 'left', fontSize: '16px' }} component="div">
           Naveena Apparels
          </Typography>
          <Typography variant="body3" sx={{ display: 'flex', alignItems: 'left', fontSize: '14px', color: '#FFF' }}>
           Kavilipalayam Main Road,
          </Typography>
          <Typography variant="body3" sx={{ display: 'flex', alignItems: 'left', fontSize: '14px', color: '#FFF' }}>
           Tiruppur.
          </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6} >
          <Box sx={{ ml: { xs: 3, md: 0 }, }}>
          <Typography sx={{ mb: 1, display: 'flex', alignItems: 'left', color: '#FFF', }} color="text.secondary">
           Unit - 2
          </Typography>
          <Typography variant="h6" style={{ color: '#FFF' }} sx={{ display: 'flex', alignItems: 'left', fontSize: '16px' }} component="div">
            Sealink Fashion (P)LTD
          </Typography>
          <Typography variant="body3" sx={{ display: 'flex', alignItems: 'left', fontSize: '14px', color: '#FFF' }}>
            Vijayapuram,
          </Typography>
          <Typography variant="body3" sx={{ display: 'flex', alignItems: 'left', fontSize: '14px', color: '#FFF' }}>
            Tiruppur.
          </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6} >
          <Box sx={{ ml: { xs: 3, md: 5 } }}>
          <Typography sx={{ mb: 1, display: 'flex', alignItems: 'left', color: '#FFF', }} color="text.secondary">
            Head Office
          </Typography>
          <Typography variant="h6" style={{ color: '#FFF' }} sx={{ display: 'flex', alignItems: 'left', fontSize: '16px' }} component="div">
            MA Apparels
          </Typography>
          <Typography variant="body3" sx={{ display: 'flex', alignItems: 'left', fontSize: '14px', color: '#FFF' }}>
            S.F.No.227, 1st floor Christian Colony,
          </Typography>
          <Typography variant="body3" sx={{ display: 'flex', alignItems: 'left', fontSize: '14px', color: '#FFF' }}>
            Muthanampalayam Ring Road,
          </Typography>
          <Typography variant="body3" sx={{ display: 'flex', alignItems: 'left', fontSize: '14px', color: '#FFF' }}>
            Nallur, Tirupur - 641606.
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} >
          <Box sx={{ display: 'flex', alignItems: 'left', fontSize: '14px', ml: { xs: 3, md: 0 }, mt: { xs: 0, md: 2 } }}>
           <div style={{ marginTop: '10px' }}>
             <a href='tel:+919943380777'>
             <Typography variant="body3" color={"#000000"} sx={{ display: 'flex', alignItems: 'left', color: '#FFF' }}>
               <PhoneInTalkIcon sx={{ fontSize: '14px', verticalAlign: 'middle', marginRight: '5px' }} /> 
                 Phone No: +91 99433 80777</Typography>
             </a><br/>
             <Typography variant="body3" color={"#000000"} sx={{ display: 'flex', alignItems: 'left', mt: -2, color: '#FFF' }}> 
               <ForwardToInboxIcon sx={{ fontSize: '14px', verticalAlign: 'middle', marginRight: '5px' }} />
                 Email: mohan@maapparels.com</Typography>
             <Typography variant="body3" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', fontSize: '14px', marginRight: '20px', color: '#FFF' }}>
                 mohan@maapparels.in
             </Typography>
           </div>
           </Box>
        </Grid>
      
<Grid item xs={12} md={12} lg={12}>
  <Paper sx={{ width: '100%', minHeight: '260px', overflow: 'hidden', mt: 2 }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.2057880997004!2d77.39057584545762!3d11.09803511218207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA1JzUzLjEiTiA3N8KwMjMnMjUuMSJF!5e0!3m2!1sen!2sin!4v1693824690722!5m2!1sen!2sin"
      title="Google Map - MA Apparels Location"
      height="260px"
      width= '100%'
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </Paper>
</Grid>
      </Grid>
    </Box>
    </Paper>
  </Grid>

  </Grid>
</Container>

      </div>
    </Base>
  );
};

export default Contact;