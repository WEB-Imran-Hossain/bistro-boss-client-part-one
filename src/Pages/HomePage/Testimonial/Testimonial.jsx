import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
    // state declare
    const [reviews, setReviews] = useState([]);

    // JSON data load
    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    });

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            {/* testimonials slider */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {/* loop for get reviews */}

                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="m-24 flex flex-col items-center space-y-4">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-6xl" />
                            <p className="text-center">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;
