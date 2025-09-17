import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const ProductsCarousel = () => {
  const products = [
    { id: 1, image: '/chothing-ecommerce.png',link:"https://clothing-ecommerce-website-rbyl.vercel.app/", },
    { id: 2, image: '/marketpro.png',link:"https://react-1-blue.vercel.app/", },
    { id: 3, image: '/cafu.png',link:"https://cafue.vercel.app/", },
  ];

  return (
    <section className="products-section" id='Prodect'>
      <h2 className="products-title">Products</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        className="products-carousel"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <a href={product.link} target="_blank"><img src={product.image} alt={`Product ${product.id}`}/></a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductsCarousel;
