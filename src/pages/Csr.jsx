import React from 'react'
import Base from '../components/Base';
import { Card, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import csr from '../assets/images/csr.jpg';
import csrmob from '../assets/images/csrmob.jpg';
import env from '../assets/images/envcsr.jpg';
import envwom from '../assets/images/envwom.jpg';

const Csr = () => {
    return (
      <Base>
      <div className='about'>
      <Grid item xs={12} md={12} lg={12} sx={{ mt: -3 }}>
            <Paper elevation={0} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <img
                    src={csr}
                    alt='CSR'
                    style={{ height: '420px', width: '100%' }}
                />
            </Paper>
            <Paper elevation={0} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <img
                    src={csrmob}
                    alt='CSR'
                    style={{ height: '360px', width: '100%' }}
                />
            </Paper>
          </Grid>

{/* Content CSR */}
<Container>
        <Grid container spacing={3} sx={{ p: 10 }}>
        <Grid sx={{ mt:-3, mb: 2 }} item xs={12} md={12} lg={12}>
        <Typography style={{ fontWeight: 'bold', fontSize: '28px', justifyContent: 'center', display: 'flex', color: '#2F4858' }} variant='bullet'>OUR SOCIAL RESPONSIBILITIES</Typography>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
        <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          height="350"
          image={env}
          alt="We Love Our Earth"
        />
    </Card>
        </Grid>

        <Grid item xs={12} md={7} lg={7} sx={{ mt: 4 }}>
        <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
            Environmental Responsibilty:
          </Typography>
            <Typography variant='body2' sx={{ mt: 3 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
            The concept of social responsibility holds that an organization should work in a manner in which the interests of the stakeholders are protected or, at the very least, they are not adversely affected. 
            </Typography>
            <Typography variant='body2' sx={{ mt: 3 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
            It holds that the organization should work in an ethical manner and work in the best interests of the various parties associated with it.
            </Typography>
            <Typography variant='body2' sx={{ mt: 3 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
            At our core, we believe in stewardship of the planet. We're dedicated to minimizing our environmental footprint, from sustainable sourcing to eco-friendly practices, because a cleaner Earth is everyone's responsibility.
            </Typography>
        </Grid>

        <Grid item xs={12} md={7} lg={7} sx={{ mt: 4 }}>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
          Garment Safety:
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          We prioritize garment safety to ensure our products meet the highest standards. From rigorous quality checks to safe working conditions, we're committed to the well-being of our workers and customers alike, because safety is paramount in everything we do.
          </Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', color: '#F40B4B' }} sx={{ mt: 2 }}>
          Women Empowerment:
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }} style={{ fontSize: '14px', justifyContent: 'center', display: 'flex', color: '#2F4858' }}>
          The garments industries generally employ hundreds or thousands of workers. Most of the factories employ above thousands workers, but the greatest number of the employees in garment factories are female.
          </Typography>
        </Grid>

        <Grid item xs={12} md={5} lg={5}>
        <Card sx={{ maxWidth: '100%', mt: 5, ml: 1 }}>
        <CardMedia
          component="img"
          height="330"
          image={envwom}
          alt="Supports Women Empoverment"
        />
    </Card>
        </Grid>
    </Grid>
    </Container>
    </div>
    </Base>
)};

export default Csr