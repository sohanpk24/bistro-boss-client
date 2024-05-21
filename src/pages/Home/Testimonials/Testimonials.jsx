import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";





const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <section className="my-20">
        <SectionTitle
          subHeading={"What Our Client Say"}
          heading={"Testimonials"}
        ></SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="my-16 mx-24 flex space-y-4 flex-col items-center text-center">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                
                <p>{review.details}</p>
                <h3 className="text-2xl text-yellow-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
