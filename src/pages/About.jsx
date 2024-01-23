import React from 'react'
import Base from '../components/Base'
import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import intro from '../assets/images/intro.jpg';
import quality from '../assets/images/Quality.jpg';
import infrastructure from '../assets/images/infrastructure.jpg';
import client from '../assets/images/client.svg';
import clientMob from '../assets/images/clientMob.svg';
import wdc from '../assets/images/Certification/WDC.png';
import bsci from '../assets/images/Certification/bsci-certification-250x250.png';
import sedex from '../assets/images/Certification/sedex.png';
import uni from '../assets/images/Certification/uni.png';

const About = () => {
  return (
    <Base>
    <div className='about'>
    <Container>
        <Grid container spacing={3} sx={{ p: 5 }}>
        <Grid sx={{ mt:-3, mb: 2 }} item xs={12} md={12} lg={12}>
        <Typography style={{ fontWeight: 'bold', fontSize: '30px', justifyContent: 'center', display: 'flex', color: '#2F4858' }} variant='bullet'>ABOUT US</Typography>
        </Grid>
        <Grid item xs={12} md={5} lg={5} sx={{ mt:2 }}>
        <Card sx={{ maxWidth: '100%', mt: 2, ml: 1 }}>
        <CardMedia
          component="img"
          image={intro}
          alt="Ma Apparels"
        />
    </Card>
        </Grid>

        <Grid item xs={12} md={7} lg={7} sx={{ mt: 2 }}>
  <Typography variant='body2' style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
    We offer an exclusive range of knitted garments, kids knitted garments, ladies knitted garments, and men's knitted garments. The garments are made from superior quality materials and are very durable. We are always abreast with the latest fashion trends and thus we are the first choice when it comes to fashion and good quality.
  </Typography>
  <Typography variant='body2' sx={{ mt: 3 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
    Incepted in the year 1995, we "MA Apparels", are a highly acclaimed name in the knitted garment industry. Our valuable industry experience as well as availability of technically advanced machinery equipment has helped us to deliver an exquisite range of knitted garments that are known for their styles, colors, and innovative patterns.
  </Typography>
  <Typography variant='body2' sx={{ mt: 3 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
    Our company valuable industry experience has assisted us in successfully delivering garment products as per the varied demands and needs of our clients. The wide ranges of Profile knitted garments offered by us meets the dressing requirements of kids, ladies, and gents and are available in varied sizes, patterns, and colors.
  </Typography>
  <Typography variant='body2' sx={{ mt: 3 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
    Further our expertise and the determined approach of our team enable us to successfully meet the targets of both the bulk and well as small order requirements. Our efficient handling of the entire operations ensures that the orders are delivered promptly with no complaints on the quality, style, or quantity fronts.
  </Typography>
</Grid>


        <Grid item xs={12} md={12} lg={12} sx={{ mt: 3 }}>
        <Typography style={{ fontWeight: 'bold', fontSize: '30px', justifyContent: 'center', display: 'flex', color: '#2F4858' }} variant='bullet'>QUALITY</Typography>
        </Grid>
        <Grid item xs={12} md={7} lg={7} sx={{ mt: 1 }}>
          <Typography variant='body2' style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          Our products are made up of 100% viscose, 100% cotton, cotton elasthan, polyester, Modal and various other fabrics that come in different blends and combinations.
          The raw material for our garment products are procured from Tirupur City, which is a hub for manufacturing garments. This close proximity with the industry helps us in having a better understanding of the markets and incorporating in our products the desired changes as required by our clients.
          </Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
          Customized Products:
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          Our valuable industry experience and in depth knowledge of the production processes assist us in offering to our clients customized product development facilities as per their specific needs and market requirements. We offer customization in terms of material, design or pattern and use high quality raw materials like knitted yarn, knitted cotton and other quality synthetic material in the production of our exclusive garment collection.
          </Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
          Our Team:
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          The smooth functioning of our production processes and on time delivery of work orders is made possible due to the technical expertise and dedicated approach of our team of professionals. Working with us under different capacities, we have around 200 employees in total out of which 25 are administrative employees, 100 skilled workers and 75 semi-skilled workers.
          </Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
          Our Quality Assurance System:
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          We have the services of dedicated team of quality personnel who judiciously use their expertise in monitoring the quality feature of our garment products. These intensive checking measures as well as other innovative means assure our clients of a quality garment product.
          </Typography>
        </Grid>

        <Grid item xs={12} md={5} lg={5}>
        <Card sx={{ maxWidth: '100%', mt: 2, ml: 1 }}>
        <CardMedia
          component="img"
          image={quality}
          alt="Quality"
        />
    </Card>
        </Grid>

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


{/* Infrastructure */}
        <Grid item xs={12} md={12} lg={12} sx={{ mt: 4 }}>
        <Typography style={{ fontWeight: 'bold', fontSize: '30px', justifyContent: 'center', display: 'flex', color: '#2F4858' }} variant='bullet'>INFRASTRUCTURE</Typography>
        </Grid>

        <Grid item xs={12} md={5} lg={5}>
        <Card sx={{ maxWidth: '100%', mt: 2 }}>
        <CardMedia
          component="img"
          height="480"
          width='100%'
          image={infrastructure}
          alt="Infrastructure"
        />
    </Card>
        </Grid>

        <Grid item xs={12} md={7} lg={7} sx={{ mt: 3 }}>
          <Typography variant='body2' style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          We have sound infrastructure that enable us to deliver the best quality knitted garments.Further, it also enables us to successfully meet daily work order requirements. Our technically advanced range of machinery equipment includes:
          </Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '14px', display: 'flex', color: '#F40B4B' }}>
          Over Lock Machines, Flat Lock Machines, Button Hole Machine
          </Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 1 }}>
      Production capacity: 10,000 pieces basic T-shirts/day.
    </Typography>
          <Box sx={{ m: 1 }}>
          <Typography variant='body2' style={{ fontSize: '14px', justifyContent: 'left', display: 'flex', color: '#2F4858' }}>
          1.Full fledged in house production unit with right from cutting to packing
          </Typography>
          <Typography variant='body2' style={{ fontSize: '14px', justifyContent: 'left', display: 'flex', color: '#2F4858' }}>
          2. 2 factories each around 800 imported machines, meeting the needs of stitching and finishing requirements.
          </Typography>
          </Box>

          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
          Packing:
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          Catering to the global clientele, we Ensure that our range of garment products reach in exactly the same shape as they are dispatched from our units, thus ensuring that the beauty of finished product remains Intact. We use superior packaging materials Like polythene bags and other material as required by clients, to meet the packaging requirements. Further the expertise of our packaging personnel and use of specialized packing machinery equipment, allows us to give a flawless packaging to our products.
          </Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
          Shipment Procedures:
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          Our time perfected techniques enable us in maintaining a smooth shipment process. It enables our products to reach our clients on time. Some of the salient features of our shipment procedures include:- 
          Containers are fumigated and Carefully loaded by our own staff, ensuring Proper handling of cargo. The Skills of our shipping personnel help in the optimal space utilizing of Containers. We regularly track the containers from the time of dispatch to its delivery, this helps our clients get safe and prompt delivery of products.
          </Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
            Clientele:
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
            We strive towards maintaining consistency in bringing out superior quality and exclusivity in our range of garment products. Further, our widespread client base in both the national and international markets enables us to extend the reach of our quality products among many of our patrons. Our main markets are in USA, Canada, Germany.
          </Typography>
        </Grid>

        <Grid item xs={12} md={12} lg={12} sx={{ mt: 3 }}>
        <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '20px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
          Our Product Range:
        </Typography>
        <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
        Leveraging on our modern manufacturing facility that is equipped with amenities machines,
we meet the demanding requirements of the garments industry. We manufacture & supply
extensive range of hi-fashion knitted garments for men, women & kids. Our products range
encompasses the following varieties.
        </Typography>
        <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', color: '#F40B4B' }} sx={{ my: 2, }}>
        We offer to our clients wide range of finely finished knitted garments including:
        </Typography>

        </Grid>

        <Grid item xs={12} md={4} lg={4} sx={{ mt: -3, }}>
        <Typography component="div" variant='body2' style={{ fontSize: '14px', justifyContent: 'left', display: 'flex', color: '#2F4858' }} sx={{ ml:2 }}>
      <ul className='list-disc'>
        <li>Baby Rompers</li>
        <li>Kids Wear</li>
        <li>Boys T-Shirts</li>
        <li>Girls T-Shirts</li>
      </ul>
    </Typography>
    </Grid>

    <Grid item xs={12} md={4} lg={4} sx={{ mt: -3 }}>
        <Typography component="div" variant='body2' sx={{ ml:2 }} style={{ fontSize: '14px', justifyContent: 'left', display: 'flex', color: '#2F4858' }}>
      <ul className='list-disc'>
        <li>Ladies Tops</li>
        <li>Ladies T-Shirts</li>
        <li>Ladies Polo Shirts</li>
        <li>Ladies Nighties</li>
      </ul>
    </Typography>
    </Grid>

    <Grid item xs={12} md={4} lg={4} sx={{ mt: -3 }}>
        <Typography component="div" variant='body2' sx={{ ml:2 }} style={{ fontSize: '14px', justifyContent: 'left', display: 'flex', color: '#2F4858' }}>
      <ul className='list-disc'>
        <li>Men's T-Shirts</li>
        <li>Men's Polo Shirts</li>
        <li>Men's Shorts</li>
        <li>Men's Jogging Pants</li>
      </ul>
    </Typography>
    </Grid>

    </Grid>
    </Container>
    
    <Grid item sx={{ m: 5 }} xs={12} md={12} lg={12}>
    <Typography variant='bullet' style={{ fontWeight: 'bold', fontSize: '30px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
        OUR CLIENTS
    </Typography>
    </Grid>
    
    <Box sx={{ px: 5, pb: 10, display: { xs: 'none', md: 'flex' } }}>
<img
    src={client} 
    alt='Client'
    style={{ width: '100%', height: 'auto', }} 
  />
</Box>
<Box sx={{ pb: 5,display: { xs: 'flex', md: 'none' } }}>
<img
    src={clientMob} 
    alt='Client'
    style={{ width: '100%', height: 'auto', }} 
  />
</Box>
    </div>
    </Base>
  )
}

export default About