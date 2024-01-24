import { useRef } from "react";
import { Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Logo_text, Logo, Logo_icon } from "../../../../../assets";
import Autoplay from "embla-carousel-autoplay";

import "@mantine/carousel/styles.css";

const index = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Container size="md" py={20}>
      <div>
        <h3 className="text-2xl md:text-4xl font-semibold text-center text-primary-tite">
          Partners
        </h3>
      </div>

      <Carousel
        mt={30}
        align="start"
        controlSize={21}
        loop
        dragFree
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        withIndicators
        plugins={[autoplay.current]}
      >
        <Carousel.Slide>
          <img
            src={Logo}
            alt="doctor-c partner logo"
            className="h-32 w-full object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src={Logo_icon}
            alt="doctor-c partner logo"
            className="h-32 w-full object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src={Logo_text}
            alt="doctor-c partner logo"
            className="h-32 w-full object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src={Logo}
            alt="doctor-c partner logo"
            className="h-32 w-full object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src={Logo_icon}
            alt="doctor-c partner logo"
            className="h-32 w-full object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src={Logo_text}
            alt="doctor-c partner logo"
            className="h-32 w-full object-contain"
          />
        </Carousel.Slide>
      </Carousel>
      <div></div>
    </Container>
  );
};

export default index;
