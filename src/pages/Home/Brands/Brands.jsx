import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import p1 from "../../../assets/brands/amazon.png"
import p2 from "../../../assets/brands/amazon_vector.png"
import p3 from "../../../assets/brands/casio.png"
import p4 from "../../../assets/brands/moonstar.png"
import p5 from "../../../assets/brands/randstad.png"
import p6 from "../../../assets/brands/star.png"
import p7 from "../../../assets/brands/start_people.png"
import p8 from "../../../assets/brands/start_people.png"
import p9 from "../../../assets/brands/start_people.png"
import {  Autoplay, EffectCoverflow } from 'swiper/modules';

const brandLogos = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9
]


const Brands = () => {
    return (
        <div className="brands-swiper" style={{ padding: '2rem 0' }}>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={24}
                loop={true}
                grabCursor={true}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
              
                
                breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 16 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 24 },
                }}
                modules={[ Autoplay, EffectCoverflow]}
                className="mySwiper"
            >
                {
                    brandLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={logo} alt={`brand-${index}`} style={{ width: '140px', height: '80px', objectFit: 'contain', filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.12))', borderRadius: 8, background: 'white', padding: 8 }} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Brands;