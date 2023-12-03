import React from 'react'
import intro from '../assets/images/intro.jpg';
import quality from '../assets/images/Quality.jpg';
import infra from '../assets/images/infrastructure.jpg';
import wdc from '../assets/images/Certification/WDC.png';
import bsci from '../assets/images/Certification/bsci-certification-250x250.png';
import sedex from '../assets/images/Certification/sedex.png';
import uni from '../assets/images/Certification/uni.png';
import client from '../assets/images/client.svg';
import clientMob from '../assets/images/clientMob.svg';

const About = () => {
  return (
    <div className="w-full bg-pink-100">
    <div className="p-5 md:p-20 subpixel-antialiased font-popins">
    <div className="text-center">
      <p className='text-3xl text-gray-700 font-bold'>ABOUT US</p>
    </div>

    <div className="grid grid-cols-12 gap-10 mt-10">
      <div className="col-span-12 md:col-span-6">
      <img
      className="rounded-xl md:h-1080px"
        src={intro}
        alt="Ma Apparels"
        />
      </div>
      <div className="w-full col-span-12 md:col-span-6 text-sm text-gray-600">
        <div className="indent-8">
        We offer an exclusive range of knitted garments, kids knitted garments, ladies knitted garments and men's knitted garments. The garments are made from superior quality materials and are very durable. We are always abreast with the latest fashion trends and thus we are the first choice when it comes to fashion and good quality.
        </div>
        <div className="indent-8 mt-6">
        Incepted in the year 1995, we 'MA Apparels', are a highly acclaimed name in the knitted garment industry. Our valuable industry experience as well as availability of technically advanced machinery equipment has helped us to deliver an exquisite range of knitted garments that are known for their styles, colors and innovative patterns.
        </div>
        <div className="intent-8 mt-6">
        Our company valuable industry experience has assisted us in successfully delivering garment products as per the varied demands and needs of our clients. The wide ranges of Profile knitted garments offered by us meets the dressing requirements of kids, ladies and gents and are available in varied sizes, patterns and colors.
        </div>
        <div className="intent-8 mt-6">
        Further our expertise and the determined approach of our team enables us to successfully meet the targets of both the bulk and well as small order requirements. Our efficient handling of the entire operations ensures that the orders are delivered promptly with no complaints on the quality, style or quantity fronts.
        </div>
      </div>
    </div>

{/* Quality */}
    <div className="text-center mt-20">
      <p className='text-3xl text-gray-700 font-bold'>QUALITY</p>
    </div>

    <div className="grid grid-cols-12 gap-10 mt-10">
      <div className="w-full col-span-12 md:col-span-6 text-sm text-gray-600">
        <div className="indent-8">
        Our products are made up of 100% viscose, 100% cotton, cotton elasthan, polyester, Modal and various other fabrics that come in different blends and combinations. The raw material for our garment products are procured from Tirupur City, which is a hub for manufacturing garments. This close proximity with the industry helps us in having a better understanding of the markets and incorporating in our products the desired changes as required by our clients.
        </div>
        <p className="text-brand mt-6 font-semibold text-base">Customized Products:</p>
        <div className="indent-8 mt-2">
        Our valuable industry experience and in depth knowledge of the production processes assist us in offering to our clients customized product development facilities as per their specific needs and market requirements. We offer customization in terms of material, design or pattern and use high quality raw materials like knitted yarn, knitted cotton and other quality synthetic material in the production of our exclusive garment collection.
        </div>
        <p className="text-brand mt-6 font-semibold text-base">Our Team:</p>
        <div className="indent-8 mt-2">
        The smooth functioning of our production processes and on time delivery of work orders is made possible due to the technical expertise and dedicated approach of our team of professionals. Working with us under different capacities, we have around 200 employees in total out of which 25 are administrative employees, 100 skilled workers and 75 semi-skilled workers.
        </div>
        <p className="text-brand mt-6 font-semibold text-base">Our Quality Assurance System:</p>
        <div className="indent-8 mt-2">
        We have the services of dedicated team of quality personnel who judiciously use their expertise in monitoring the quality feature of our garment products. These intensive checking measures as well as other innovative means assure our clients of a quality garment product.
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
      <img
      className="rounded-xl md:h-1080px"
        src={quality}
        alt="Ma Apparels"
        />
      </div>
    </div>

    <div className="text-center mt-20 mb-10">
      <p className='text-3xl text-gray-700 font-bold'>CERTIFICATIONS</p>
    </div>

    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-0 md:mx-40">
  {/* Image 1 */}
  <div className="md:w-1/4 w-1/2 md:mb-0 mb-6">
    <img
      src={wdc}
      alt="Ma Apparels"
      height={64}
      width={128}
    />
  </div>

  {/* Image 2 */}
  <div className="md:w-1/4 w-1/2 md:mb-0 mb-6">
    <img
      src={bsci}
      alt="Ma Apparels"
      height={64}
      width={128}
    />
  </div>

  {/* Image 3 */}
  <div className="md:w-1/4 w-1/2 md:mb-0 mb-6">
    <img
      src={sedex}
      alt="Ma Apparels"
      height={90}
      width={90}
    />
  </div>

  {/* Image 4 */}
  <div className="md:w-1/4 w-1/2 md:mb-0 mb-6">
    <img
      src={uni}
      alt="Ma Apparels"
      height={64}
      width={128}
    />
  </div>
</div>

{/* Infrastructure */}
    <div className="text-center mt-20 mb-10">
      <p className='text-3xl text-gray-700 font-bold'>INFRASTRUCTURE</p>
    </div>

    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-12 md:col-span-6">
      <img
      className="rounded-xl md:h-max"
        src={infra}
        alt="Ma Apparels"
        />
      </div>
      <div className="w-full col-span-12 md:col-span-6 text-sm text-gray-600">
        <div className="indent-8">
        We have sound infrastructure that enable us to deliver the best quality knitted garments.Further, it also enables us to successfully meet daily work order requirements. Our technically advanced range of machinery equipment includes:
        </div>
        <div className="text-brand mt-1 font-semibold">Over Lock Machines, Flat Lock Machines, Button Hole Machine</div>
        <div className="mt-2 text-brand font-bold text-lg">Production capacity: 10,000 pieces basic T-shirts/day.</div>
        <div className="indent-3 mt-2">1.Full fledged in house production unit with right from cutting to packing</div>
        <div className="indent-3 mt-1">2. 2 factories each around 800 imported machines, meeting the needs of stitching and finishing requirements</div>
        <div className="mt-4 text-brand font-bold text-lg">Packing:</div>
        <div className="indent-8 mt-2">
        Catering to the global clientele, we Ensure that our range of garment products reach in exactly the same shape as they are dispatched from our units, thus ensuring that the beauty of finished product remains Intact. We use superior packaging materials Like polythene bags and other material as required by clients, to meet the packaging requirements. Further the expertise of our packaging personnel and use of specialized packing machinery equipment, allows us to give a flawless packaging to our products.
        </div>
        <div className="mt-4 text-brand font-bold text-lg">Shipment Procedures:</div>
        <div className="indent-8 mt-2">
        Our time perfected techniques enable us in maintaining a smooth shipment process. It enables our products to reach our clients on time. Some of the salient features of our shipment procedures include:- Containers are fumigated and Carefully loaded by our own staff, ensuring Proper handling of cargo. The Skills of our shipping personnel help in the optimal space utilizing of Containers. We regularly track the containers from the time of dispatch to its delivery, this helps our clients get safe and prompt delivery of products.
        </div>
        <div className="mt-4 text-brand font-bold text-lg">Clientele:</div>
        <div className="indent-8 mt-2">
        We strive towards maintaining consistency in bringing out superior quality and exclusivity in our range of garment products. Further, our widespread client base in both the national and international markets enables us to extend the reach of our quality products among many of our patrons. Our main markets are in USA, Canada, Germany.
        </div>

      </div>
    </div>

    <div className="mt-6 text-brand font-bold text-xl">Our Product Range:</div>
        <div className="text-sm text-gray-600 indent-8 mt-2">
        Leveraging on our modern manufacturing facility that is equipped with amenities machines, we meet the demanding requirements of the garments industry. We manufacture & supply extensive range of hi-fashion knitted garments for men, women & kids. Our products range encompasses the following varieties.
        </div>

      <div className="mt-6 text-brand font-bold text-md">We offer to our clients wide range of finely finished knitted garments including:</div>
      <div className='hidden md:flex md:justify-between text-sm text-gray-600 mt-6 md:mx-40'>
  {/** Medium and above screens */}
  <div className='text-left md:w-1/3'>
    <ul className='list-disc'>
      <li>Baby Rompers</li>
      <li>Kids Wear</li>
      <li>Boys T-Shirts</li>
      <li>Girls T-Shirts</li>
    </ul>
  </div>

  <div className='text-left md:w-1/3'>
    <ul className='list-disc'>
      <li>Ladies Tops</li>
      <li>Ladies T-Shirts</li>
      <li>Ladies Polo Shirts</li>
      <li>Ladies Nighties</li>
    </ul>
  </div>

  <div className='text-left md:w-1/3'>
    <ul className='list-disc'>
      <li>Men's T-Shirts</li>
      <li>Men's Polo Shirts</li>
      <li>Men's Shorts</li>
      <li>Men's Jogging Pants</li>
    </ul>
  </div>
</div>
{/** mobile screens */}
<div className='mx-10 md:hidden text-sm text-gray-600 mt-6'>
    <ul className='list-disc'>
      <li>Baby Rompers</li>
      <li>Kids Wear</li>
      <li>Boys T-Shirts</li>
      <li>Girls T-Shirts</li>
      <li>Ladies Tops</li>
      <li>Ladies T-Shirts</li>
      <li>Ladies Polo Shirts</li>
      <li>Ladies Nighties</li>
      <li>Men's T-Shirts</li>
      <li>Men's Polo Shirts</li>
      <li>Men's Shorts</li>
      <li>Men's Jogging Pants</li>
    </ul>
  </div>

  {/* Client */}
  <div className="text-center mt-20">
      <p className='text-3xl text-gray-700 font-bold'>OUR CLIENTS</p>
    </div>
<div className='hidden md:flex mt-10'>
  <img 
    src={client}
    alt='Client' 
  />
</div>

<div className='flex md:hidden mt-6'>
  <img
    src={clientMob}
    alt='Client-Mobile'
  />
</div>

    </div>
    </div>
  )
}

export default About