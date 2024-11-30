import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import bannerImgOne from "../../assets/bannerImages/Plain-T-Shirts-banner-desktop-view-home-page.jpg";
import bannerImgTwo from "../../assets/bannerImages/bhuvan-banner-desktop-view124357.jpg";
import bannerImgThree from "../../assets/bannerImages/cargo-banner-desktop-view.jpg";

const BannerCarousel = () => {
  return (
    <div className="mt-24">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={bannerImgOne} alt="Banner 1" />
        </div>
        <div>
          <img src={bannerImgTwo} alt="Banner 2" />
        </div>
        <div>
          <img src={bannerImgThree} alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
