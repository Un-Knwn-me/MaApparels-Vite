import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Navbar, MobileNav, Typography, IconButton, } from "@material-tailwind/react";
import logo from '../assets/MA-1.png';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Base = ({title, description, children}) => {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/women/casual" className="flex items-center">
          Women
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/men" className="flex items-center">
          Men
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/kids/girls" className="flex items-center">
          Kids
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/infants" className="flex items-center">
          Infant
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/csr" className="flex items-center">
          CSR
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/contact" className="flex items-center">
          Contact us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-8">
        <div className="flex items-center justify-between text-blue-gray-900 px-4">
          <div>
            <Link to='/'>
          <img
              src={logo}
              alt="MA Apparels"
              style={{ width: '70%', maxWidth: '80%' }}
            />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="md:flex items-center gap-x-4 text-brand hidden">
            <Typography variant="small" component="span" sx={{ color: '#F40B4B' }}>
                <ForwardToInboxIcon sx={{ mr: 1, fontSize: '16px' }}/>
                  mohan@maapparels.com
                </Typography>
                <Typography variant="small" component="span" sx={{ color: '#F40B4B', fontSize: '14px' }}>
                  <a href='tel:+919943380777' style={{ color: '#F40B4B', textDecoration: 'none' }}> < PhoneInTalkIcon sx={{ mr: 1, fontSize: '16px' }}/> +91 99433 80777</a>
                </Typography>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        
        <div className="my-2 h-3 bg-brand -mx-10 hidden md:block" />
        <div className="-mt-1 -mb-5 h-7 bg-brandBlue -mx-10 hidden md:flex flex-wrap items-center justify-center">
        <div className="hidden text-white lg:block">{navList}</div>
        </div>

        <MobileNav open={openNav}>
          <div className="flex text-center text-black">{navList}</div>
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen">
      <main>
            <h2>{description}</h2>
            <div>{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Base

{/* <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div> */}