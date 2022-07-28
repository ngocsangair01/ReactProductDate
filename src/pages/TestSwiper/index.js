import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const TestSwiper = () => {
    const slides = []
    for (let i = 0; i < 10; i++) {
        slides.push(<SwiperSlide key={i}>
            <img src={`https://picsum.photos/id/${i + 1}/500/300`} alt="img" />
        </SwiperSlide>)
    }
    return (
        <div>
            <Swiper

            >
                {slides}

            </Swiper>
        </div>
    );
};

export default TestSwiper;