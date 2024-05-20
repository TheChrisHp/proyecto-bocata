import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

export default function Demo() {
  const autoplay = useRef(Autoplay({ delay: 2200 }));
  return (
    <Carousel
      height={680}
      width={100}
      withIndicators
      align="start"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide> <img src="https://res.cloudinary.com/dfnton7oq/image/upload/v1715971266/samples/bocata-imgs/434601893_814535467370693_6833600161098087434_n_rqx3su_pdxuno.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover'}} alt="" /> 
      </Carousel.Slide>

      <Carousel.Slide> <img src="https://res.cloudinary.com/dfnton7oq/image/upload/v1715971266/samples/bocata-imgs/438814323_828545982636308_1284979537341310745_n_oqhr8t_pv2o6o.jpg" style={{ width: '100%', height: '120%', objectFit: 'cover'}} alt="" /> 
      </Carousel.Slide>

      <Carousel.Slide> <img src="https://res.cloudinary.com/dfnton7oq/image/upload/v1714699305/samples/bocata-imgs/photo-1578916171728-46686eac8d58_r8vqa9.avif" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(2px)' }} /> </Carousel.Slide>
      </Carousel>
  );
}