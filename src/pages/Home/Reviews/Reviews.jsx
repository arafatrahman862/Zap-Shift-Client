import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import ReviewCard from "./ReviewCard";


const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
        <section className="overflow-hidden bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-4">

                {/* Heading */}

                <div className="mb-14 text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        Reviews
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-800 md:text-5xl">
                        What Our Customers Say
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                        Thousands of customers trust our courier service for
                        fast, secure, and hassle-free deliveries across
                        Bangladesh.
                    </p>
                </div>

                {/* Slider */}

                <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 180,
                        modifier: 2,
                        scale: 0.9,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1.3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 35,
                        },
                    }}
                    className="py-10"
                >
                    {reviews?.map((review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;