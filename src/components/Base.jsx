import { AppBar, Box, Button, Container, Divider, Fab, Grid, IconButton, Link, List, ListItem, ListItemButton, Paper, SwipeableDrawer, Toolbar, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/MA-1.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadingIcon from '@mui/icons-material/Downloading';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

function Copyright() {
    return (
      <Fragment>
        {'© '}
        <Link sx={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }} href='#'>
        Ma Apparel -
        </Link>{' '}
        {new Date().getFullYear()}
      </Fragment>
    );
  }

const Base = ({title, description, children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

      useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [location]);

      function home () {
        navigate('/')
      }

      const isButtonActive = (path) => {
        return location.pathname === path ? 'active' : '';
      };

  return (
    <div className='base'>
{/* <Box component='div'>
  <Paper elevation={0} sx={{ backgroundColor: '#F40B4B', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Typography variant="body2" component="span" sx={{ color: '#FFEDF2', fontSize: '12px', marginRight: '10px' }}>
      <a href='tel:+919943380777' style={{ color: '#FFEDF2', textDecoration: 'none' }}>+91 99433 80777</a>
    </Typography>
    <Typography variant="body2" component="span" sx={{ color: '#FFEDF2', fontSize: '12px' }}>
      mohan@maapparels.com
    </Typography>
  </Paper>
</Box> */}

<AppBar position="sticky" elevation={8} sx={{ backgroundColor: '#FFF', boxShadow: '0px 7px 16px 0px rgba(0,0,0,0.08)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              color: '#F40B4B',
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              fontSize: '20px',
            }}
          >
              <img
              src={logo}
              alt="MA Apparels"
              onClick={home}
              style={{ width: '80%', maxWidth: '100%' }}
            />
          </Typography>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              color: '#F40B4B',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
              fontSize: '20px', 
            }}
          >
            <img
              src={logo}
              alt="MA Apparels"
              onClick={home}
              style={{ width: '65%', maxWidth: '100%' }}
            />
          </Typography>
          <Box
  sx={{
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    mr: 5,
    justifyContent: 'flex-end',
    gap: '20px', // Adjust the gap as needed
    flexGrow: 1, // This will push the content to the right
  }}
>
  <Typography variant="body2" component="span" sx={{ color: '#F40B4B', fontSize: '14px' }}>
    <ForwardToInboxIcon sx={{ mr: 1, fontSize: '16px' }}/>
    mohan@maapparels.com
  </Typography>
  <Typography variant="body2" component="span" sx={{ color: '#F40B4B', fontSize: '14px' }}>
    <a href='tel:+919943380777' style={{ color: '#F40B4B', textDecoration: 'none' }}> < PhoneInTalkIcon sx={{ mr: 1, fontSize: '16px' }}/> +91 99433 80777</a>
  </Typography>
</Box>

          {/* <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' },  justifyContent: 'center' }}>

              <Button
                onClick={()=>navigate('/')}
                className={isButtonActive('/')}
                style={{ fontFamily: 'poppins', fontWeight: '500' }}
                sx={{ my: 2, color: '#F40B4B', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' }}}
              >
                Home
              </Button>
              <Button
                onClick={()=>navigate('/women')}
                className={isButtonActive('/women')}
                style={{ fontFamily: 'poppins', fontWeight: '500' }}
                sx={{ my: 2, color: '#F40B4B', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
              >
                Women
              </Button>
              <Button
                onClick={()=>navigate('/men')}
                className={isButtonActive('/men')}
                style={{ fontFamily: 'poppins', fontWeight: '500' }}
                sx={{ my: 2, color: '#F40B4B', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
              >
                Men
              </Button>
              <Button
                onClick={()=>navigate('/kids/girls')}
                className={isButtonActive('/kids/girls')}
                style={{ fontFamily: 'poppins', fontWeight: '500' }}
                sx={{ my: 2, color: '#F40B4B', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
              >
                Kids
              </Button>
              <Button
                onClick={()=>navigate('/infants')}
                className={isButtonActive('/infants')}
                style={{ fontFamily: 'poppins', fontWeight: '500' }}
                sx={{ my: 2, color: '#F40B4B', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
              >
                Infant
              </Button>
              <Button
                onClick={()=>navigate('/about')}
                className={isButtonActive('/about')}
                style={{ fontFamily: 'poppins', fontWeight: '500' }}
                sx={{ my: 2, color: '#F40B4B', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
              >
                About
              </Button>
              <Button
                onClick={()=>navigate('/csr')}
                className={isButtonActive('/csr')}
                style={{ fontFamily: 'poppins', fontWeight: '500' }}
                sx={{ my: 2, color: '#F40B4B', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
              >
                CSR
              </Button>
              <Button
                onClick={()=>navigate('/contactus')}
                className={isButtonActive('/contactus')}
                style={{ fontFamily: 'poppins', fontWeight: '500' }}
                sx={{ my: 2, color: '#F40B4B', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
              >
                Contact
              </Button>            
          </Box> */}
          <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MenuIcon sx={{ fontSize: '30px', color: '#0D003F' }} onClick={()=>setMenuOpen(true)}/>
            </IconButton>

        </Toolbar>
      </Container>

      <SwipeableDrawer
  anchor='right'
  open={menuOpen}
  onClose={() => setMenuOpen(false)}
  onOpen={() => setMenuOpen(true)}
  sx={{
    '& .MuiPaper-root': {
      backgroundColor: '#0D003F',
      color: '#FFEDF2',
      width: '70%',
    },
  }}
>
  <div style={{ backgroundColor: '#F40B4B', display: 'flex', justifyContent: 'flex-start' }}>
    <IconButton sx={{ color: '#FFEDF2' }} onClick={() => setMenuOpen(false)}>
      <CloseIcon />
    </IconButton>
  </div>
  <Divider />
  <List>
              <ListItem disablePadding sx={{     display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',  }}>
              <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2,
                    fontSize: '20px' 
                  }}
                  onClick={()=>navigate('/')}
                >
                  Home
              </ListItemButton>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2,
                    fontSize: '20px' 
                  }}
                  onClick={()=>navigate('/women/casual')}
                >
                  Women
              </ListItemButton>
              <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2,
                    fontSize: '20px' 
                  }}
                  onClick={()=>navigate('/men')}
                >
                  Men
              </ListItemButton>
              <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2,
                    fontSize: '20px' 
                  }}
                  onClick={()=>navigate('/kids/girls')}
                >
                  Kids
              </ListItemButton>
              <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2,
                    fontSize: '20px' 
                  }}
                  onClick={()=>navigate('/infants')}
                >
                  Infant
              </ListItemButton>
              <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2,
                    fontSize: '20px' 
                  }}
                  onClick={()=>navigate('/about')}
                >
                  About
              </ListItemButton>
              <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2,
                    fontSize: '20px', 
                  }}
                  onClick={()=>navigate('/csr')}
                >
                  CSR
              </ListItemButton>
              <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2,
                    fontSize: '20px', 
                  }}
                  onClick={()=>navigate('/contactus')}
                >
                  Contact
              </ListItemButton>
              </ListItem>
            </List>
          
          </SwipeableDrawer>


    <Paper elevation={0} sx={{ backgroundColor: '#F40B4B', width: '100%', height: '14px', mb: 0.5, display: { sm: 'none', xs: 'none', md: 'block' }, borderRadius: 0 }}/>
    <Paper elevation={0} sx={{ backgroundColor: '#F40B4B', width: '100%', height: '8px', mb: 0.5, display: { sm: 'block', md: 'none' }, borderRadius: 0 }}/>
    <Paper elevation={0} sx={{ backgroundColor: '#0D003F', width: '100%', height: '16px', display: { sm: 'block', md: 'none' }, borderRadius: 0 }}/>

    <Box component='div'>
  <Paper elevation={0} sx={{ backgroundColor: '#0D003F', height: '34px', display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', borderRadius: 0 }}>
  <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' },  justifyContent: 'center' }}>

<Button
  onClick={()=>navigate('/')}
  className={isButtonActive('/')}
  style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '13px' }}
  sx={{ my: 2, color: '#FFF', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' }}}
>
  Home
</Button>
<Button
  onClick={()=>navigate('/women/casual')}
  className={isButtonActive('/women/casual')}
  style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '13px' }}
  sx={{ my: 2, color: '#FFF', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
>
  Women
</Button>
<Button
  onClick={()=>navigate('/men')}
  className={isButtonActive('/men')}
  style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '13px' }}
  sx={{ ml: 2, color: '#FFF', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
>
  Men
</Button>
<Button
  onClick={()=>navigate('/kids/girls')}
  className={isButtonActive('/kids/girls')}
  style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '13px' }}
  sx={{ color: '#FFF', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
>
  Kids
</Button>
<Button
  onClick={()=>navigate('/infants')}
  className={isButtonActive('/infants')}
  style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '13px' }}
  sx={{ my: 2, color: '#FFF', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
>
  Infant
</Button>
<Button
  onClick={()=>navigate('/about')}
  className={isButtonActive('/about')}
  style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '13px' }}
  sx={{ my: 2, color: '#FFF', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
>
  About
</Button>
<Button
  onClick={()=>navigate('/csr')}
  className={isButtonActive('/csr')}
  style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '13px' }}
  sx={{ my: 2, color: '#FFF', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
>
  CSR
</Button>
<Button
  onClick={()=>navigate('/contactus')}
  className={isButtonActive('/contactus')}
  style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '13px' }}
  sx={{ my: 2, color: '#FFF', display: 'block', mx: 1, textDecoration: 'none', '&.active': { textDecoration: 'underline' } }}
>
  Contact
</Button>            
</Box>
  </Paper>
</Box>
</AppBar>
    <div>
        <main>
            <h2>{description}</h2>
            <div>{children}</div>
        </main>
        {/* <a href='#' download='MA Apparales'> */}
        <Fab variant="extended" size="medium" sx={{
    backgroundColor: '#0D003F',
    position: 'fixed', // Set position to fixed
    top: '80%',     // Adjust the top value to position it as desired
    right: '20px',    // Add right value to position it to the right
    '&:hover': {
      backgroundColor: '#0D003F',
      '& .text': {    // Target the text element within the Fab on hover
        display: 'block',
      },
    },
    color: 'white',
  }}>
        <DownloadingIcon sx={{ fontSize: '30px'}}/>
        <Typography className="text" sx={{ display: 'none', m: 1 }}>Brochure</Typography> 
      </Fab>
      {/* </a> */}
                </div>

                <div className='footer'>
         <Typography
      component="footer"
      sx={{ display: 'flex', textAlign: 'center', bgcolor: '#1F294F', color: '#FFF5E3', mt: 8 }}
    >
      <Container sx={{ mt: 6, display: 'flex', mx: 6 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography style={{ fontFamily: 'poppins', fontWeight: 'bold', fontSize: '20px' }} sx={{ display: 'flex', align: 'flex', pl: 6, }} variant="h6" marked="Center" gutterBottom>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Typography variant='button' style={{ fontFamily: 'poppins', fontSize: '13px' }} sx={{ textTransform: 'none', display: 'flex', align: 'flex', pl: 6 }}> MA Apparels,
                                              S.F.No.227,</Typography>
              </Box>
              <Box component="li">
                <Typography variant='button' align={'left'} style={{ fontFamily: 'poppins', fontSize: '13px' }} sx={{ textTransform: 'none', display: 'flex', align: 'flex', pl: 6 }}> 1st-floor Christian Colony, </Typography>
              </Box>
              <Box component="li">
                <Typography variant='button' align={'left'} style={{ fontFamily: 'poppins', fontSize: '13px' }} sx={{ textTransform: 'none', display: 'flex', align: 'flex', pl: 6 }}> 
                 Muthanampalayam Ring Road, </Typography>
              </Box>
              <Box component="li">
                <Typography variant='button' align={'left'} style={{ fontFamily: 'poppins', fontSize: '13px' }} sx={{ textTransform: 'none', display: 'flex', align: 'flex', pl: 6 }}> 
                                              Nallur, 
                                              Tirupur - 641606.</Typography>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Typography variant='button' style={{ fontFamily: 'poppins', fontWeight: 'bold' }} sx={{ display: 'flex', align: 'flex', pl: 6, mt: 1, textTransform: 'none' }}>Phone Number: </Typography>
                <a href='tel:+919943380777'>
                <Typography variant='button' sx={{ display: 'flex', align: 'flex', pl: 6 }} style={{ fontFamily: 'poppins', fontSize: '13px' }} color={"#FFF5E3"}> +91 99433 80777</Typography></a>
              </Box>
            </Box>
          </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Box sx={{ pl: 8, display: { xs: 'none', sm: 'none', md: 'block' } }}>
  <Typography variant="h6" marked="Center" sx={{ display: 'flex', align: 'flex', pl: 7 }} gutterBottom style={{ fontFamily: 'poppins', fontWeight: 'bold' }}>
    Our Products
  </Typography>
  <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
    <Box component="li" sx={{ py: 0.5 }} >
      <Link sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#F40B4B' }, cursor: 'pointer', display: 'flex', align: 'flex', pl: 8, fontSize: '14px' }} onClick={() => navigate('/women/casual')}>
        Women
      </Link>
    </Box>
    <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#F40B4B' }, cursor: 'pointer', display: 'flex', align: 'flex', pl: 8, fontSize: '14px' }} onClick={() => navigate('/men')}>
        Men
      </Link>
    </Box>
        <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#F40B4B' }, cursor: 'pointer', display: 'flex', align: 'flex', pl: 8, fontSize: '14px' }} onClick={() => navigate('/kids/girls')}>
        Kids
      </Link>
    </Box>
    <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#F40B4B' }, cursor: 'pointer', display: 'flex', align: 'flex', pl: 8, fontSize: '14px' }} onClick={() => navigate('/infants')}>
        Infant
      </Link>
    </Box>
  </Box>
  </Box>

  <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
  <Typography variant="h6" marked="Center" sx={{ align: 'center' }} gutterBottom style={{ fontFamily: 'poppins', fontWeight: 'bold' }}>
    Our Products
  </Typography>
  <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
    <Box component="li" sx={{ py: 0.5 }} >
      <Link sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', align: 'center', fontSize: '14px' }} onClick={() => navigate('/women/casual')}>
        Women
      </Link>
    </Box>
    <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', align: 'center', fontSize: '14px' }} onClick={() => navigate('/men')}>
        Men
      </Link>
    </Box>
        <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', align: 'center', fontSize: '14px' }} onClick={() => navigate('/kids/girls')}>
        Kids
      </Link>
    </Box>
    <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', align: 'center', fontSize: '14px' }} onClick={() => navigate('/infants')}>
        Infant
      </Link>
    </Box>
  </Box>
  </Box>
</Grid>


          <Grid item xs={6} sm={6} md={3} lg={3}>
    <Box sx={{ pl: 5, display: { xs: 'none', sm: 'none', md: 'block' } }}>
  <Typography variant="h6" marked="Center" gutterBottom style={{ fontFamily: 'poppins', fontWeight: 'bold' }}>
    Sitemap
  </Typography>
  <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
    <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', align: 'flex', pl: 10, fontSize: '14px', '&:hover': { color: '#F40B4B' } }} onClick={() => navigate('/about')}>
        About
      </Link>
    </Box>
    <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', align: 'flex', pl: 10, fontSize: '14px', '&:hover': { color: '#F40B4B' } }} onClick={() => navigate('/contactus')}>
        Contact
      </Link>
    </Box>
  </Box>
  </Box>

  <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
  <Typography variant="h6" marked="Center" gutterBottom style={{ fontFamily: 'poppins', fontWeight: 'bold' }}>
    Sitemap
  </Typography>
  <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
    <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', align: 'center', fontSize: '14px' }} onClick={() => navigate('/about')}>
        About
      </Link>
    </Box>
    <Box component="li" sx={{ py: 0.5 }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', align: 'center', fontSize: '14px' }} onClick={() => navigate('/contactus')}>
        Contact
      </Link>
    </Box>
  </Box>
  </Box>
</Grid>


          <Grid item xs={12} sm={12} md={3} lg={3}>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        spacing={2}
        // sx={{ height: 120 }}
      >
        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h6' style={{ fontFamily: 'poppins', fontWeight: 'bold' }}>Connect with us:</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button type='iconStyle' href='https://www.facebook.com/maapparels/'>
            <FacebookIcon style={{ color: '#FFF5E3', fontSize: '32px', '&:hover': { color: '#F40B4B' }}} />
          </Button>
          <Button type='iconStyle' href='https://www.linkedin.com/company/ma-apparels/'>
            <LinkedInIcon style={{ color: '#FFF5E3', fontSize: '32px', '&:hover': { color: '#F40B4B' }}} />
          </Button>
        </Grid>
      </Grid>
    </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ flexGrow: 1, display: { md: 'flex', justifyContent: 'center' } }}>
            <Copyright />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ flexGrow: 1, display: { md: 'flex', justifyContent: 'center' }, mb: 2, mt: -2 }}>

            <Typography variant="caption">
              {'Webpage developed by '}
              <Link href="/" rel="developed" title="Un-knwn" sx={{ textDecoration: 'none', color: 'inherit' }}>
                Un-Knwn
              </Link></Typography>
          </Grid>
        </Grid>
        
      </Container>
      
    </Typography>
    </div>

    </div>
  )
}

export default Base