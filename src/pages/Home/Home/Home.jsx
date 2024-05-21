import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BristoCard from "../BristoCard/BristoCard";
import Callus from "../CallUs/Callus";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import PopularManu from "../PopularManu/PopularManu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BristoCard></BristoCard>
      <PopularManu></PopularManu>
      <Callus></Callus>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
