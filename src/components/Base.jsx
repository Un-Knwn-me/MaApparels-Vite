import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton, Chip, SpeedDial, SpeedDialHandler, SpeedDialContent, } from "@material-tailwind/react";
import logo from '../assets/MA-1.png';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DownloadingIcon from '@mui/icons-material/Downloading';

const SITEMAP = [
  {
    title: "Contact Us",
    links: [
      {name: `MA Apparels, S.F.No.227,
    1st-floor Christian Colony,
    Muthanampalayam Ring Road,
    Nallur, Tirupur - 641606.`},
    {name: "Ph-no: +91 99433 80777", nav: 'tel:+919943380777'} ],
  },
  {
    title: "Our Products",
    links: [ {name: "Women", nav: "/women/casual"},{name: "Men", nav: "/men"}, {name: "Kids", nav: "/kids/girls"}, {name: "Infant", nav: "/infants"}],
  },
  {
    title: "Sitemap",
    links: [{name: "CSR", nav: "/csr"}, {name: "About", nav: "/about"}, {name: "Contact", nav: "/contact"}],
  },
  {
    title: "Our Units",
    links: [{name: "Naveena Apparels", nav: '#'}, {name: "Sealink Fashion (P) LTD", nav: '#'}],
  },
];
 
const currentYear = new Date().getFullYear();

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
        className="hover:opacity-50 p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="hover:opacity-50 p-1 font-normal"
      >
        <Link to="/women/casual" className="flex items-center">
          Women
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="hover:opacity-50 p-1 font-normal"
      >
        <Link to="/men" className="flex items-center">
          Men
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="hover:opacity-50 p-1 font-normal"
      >
        <Link to="/kids/girls" className="flex items-center">
          Kids
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="hover:opacity-50 p-1 font-normal"
      >
        <Link to="/infants" className="flex items-center">
          Infant
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="hover:opacity-50 p-1 font-normal"
      >
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="hover:opacity-50 p-1 font-normal"
      >
        <Link to="/csr" className="flex items-center">
          CSR
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="hover:opacity-50 p-1 font-normal"
      >
        <Link to="/contact" className="flex items-center">
          Contact us
        </Link>
      </Typography>
    </ul>
  );

  const dividerStyle = {
    borderTop: openNav ? '1px solid #ccc' : 'none',
    marginTop: openNav ? '1rem' : '0',
  };

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-10">
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
                  mohan@maapparels.in
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

        <Collapse open={openNav} className='bg-opacity-100'>
        <div style={dividerStyle}></div>
          <div className="flex justify-center bg-white-100 bg-opacity-50 font-bold text-center text-brandBlue">{navList}</div>
        </Collapse>
      </Navbar>
      <div className="mx-auto mt-6 max-w-screen">
      <main>
            <h2>{description}</h2>
            <div>{children}</div>
        </main>

{/* <Link to='#' download='MA Apparales'> */}
        <div className="fixed z-10 bottom-20 right-5">
        <SpeedDial placement="right">
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <DownloadingIcon className="h-5 w-5 transition-transform group-hover:rotate-90" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row">
          <Chip variant="gradient" value="Brochure" />
          </SpeedDialContent>
        </SpeedDial>
      </div>
{/* </Link */}

      </div>

      <footer className="relative w-full bg-footerbg mt-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        {SITEMAP.map(({ title, links }, key) => (
  <div key={key} className="w-full">
    <Typography
      variant="h6"
      className="mb-4 font-bold text-footerText uppercase"
    >
      {title}
    </Typography>
    <ul className="space-y-1">
      {links.map((link, linkKey) => (
        <Typography key={linkKey} as="li" variant="paragraph" className="font-base text-footerText">
          <a
            href={link.nav}
            className="inline-block py-1 pr-2 transition-transform hover:scale-105"
          >
            {link.name}
          </a>
        </Typography>
      ))}
    </ul>
  </div>
))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography
            className="mb-4 text-center text-xs font-normal text-footerText md:mb-0"
          >
           Webpage Devloped by Un-Knwn
          </Typography>
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-footerText md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Ma Apparels</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-footerText sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Base