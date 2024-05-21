import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-6 my-10">
            <SectionTitle
            subHeading={'Check it out'}
            heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates quae ea omnis voluptatum neque reprehenderit! Iusto ea porro quos, cum nostrum quidem adipisci vitae, exercitationem deserunt sit recusandae obcaecati incidunt et architecto eius vero praesentium provident illo. Repudiandae corporis recusandae cum quod magnam ratione aspernatur! Deserunt fugiat mollitia consequatur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;