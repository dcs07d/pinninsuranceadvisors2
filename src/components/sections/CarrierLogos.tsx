import React from 'react';
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const carriers = [
  {
    id: "aetna",
    name: "Aetna",
    image: "https://www.aetna.com/content/dam/aetna/images/logos/Aetna_Logo_ss_Violet_RGB_Coated.svg",
    className: "h-8 w-auto"
  },
  {
    id: "humana",
    name: "Humana",
    image: "https://account.humana.com/ul/assets/logos/humana.svg",
    className: "h-8 w-auto"
  },
  {
    id: "cigna",
    name: "Cigna",
    image: "https://my.cigna.com/web/assets/images/cignahlthcr_logo_color.svg",
    className: "h-12 w-auto" // Increased from h-8 to h-12
  },
  {
    id: "bcbs",
    name: "Blue Cross Blue Shield",
    image: "https://www.bcbs.com/dA/cec184ec-9008-4a98-bd75-b5d2304fb861",
    className: "h-8 w-auto"
  },
  {
    id: "wellcare",
    name: "Wellcare",
    image: "https://www.wellcarenow.com/b/assets/images/wellcare-logo.svg",
    className: "h-8 w-auto"
  },
  {
    id: "mutual",
    name: "Mutual of Omaha",
    image: "https://ok10static.oktacdn.com/fs/bco/1/fs04kpc42iWRC8Ozl4h7",
    className: "h-12 w-auto"
  },
  {
    id: "ameritas",
    name: "Ameritas",
    image: "https://marvel-b1-cdn.bc0a.com/f00000000142088/www.ameritas.com/wp-content/uploads/2021/07/logo_header_@2x.png",
    className: "h-8 w-auto"
  }
];

export default function CarrierLogos() {
  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <p className="text-sm font-medium text-gray-600">We work with these insurance carriers & more:</p>
        </div>
        
        <div className="relative mx-auto flex items-center justify-center max-w-6xl">
          <Carousel
            opts={{
              loop: true,
              align: "start",
              slidesToScroll: 1
            }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 0.5,
                stopOnInteraction: false,
                stopOnMouseEnter: true
              })
            ]}
          >
            <CarouselContent className="-ml-4">
              {carriers.map((carrier) => (
                <CarouselItem
                  key={carrier.id}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="h-20 flex items-center justify-center px-4">
                    <img
                      src={carrier.image}
                      alt={carrier.name}
                      className={`${carrier.className} grayscale hover:grayscale-0 transition-all duration-300`}
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
