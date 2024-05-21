import img1 from '../../../assets/menu/salad-bg.jpg'
import img2 from '../../../assets/menu/salad-bg.jpg'
import img3 from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const ChefRecommend = () => {
  return (
    
    <div>
      <SectionTitle
      subHeading={"Should Try"}
      heading={'Chef Recommends'}
      ></SectionTitle>
      <div className="mb-10 grid md:grid-cols-3">
     
      <div className=" w-96 bg-base-200 ">
        <figure>
          <img
            src={img1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Salad</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className=" btn btn-outline border-0 border-b-4 text-yellow-500">Buy Now</button>
          </div>
        </div>
      </div>
      <div className=" w-96 bg-base-200 ">
        <figure>
          <img
            src={img3}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">soup</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className=" btn btn-outline border-0 border-b-4 text-yellow-500">Buy Now</button>
          </div>
        </div>
      </div>
      <div className=" w-96 bg-base-200 ">
        <figure>
          <img
            src={img2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Salad</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className=" btn btn-outline border-0 border-b-4 text-yellow-500">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChefRecommend;
