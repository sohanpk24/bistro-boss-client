

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth"
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({item}) => {

    const {name, image, price, recipe, _id} = item;
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()


    const handleAddCart = food =>{
      if(user && user.email){
        //sent cart item to the database
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res=> {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 2000
            });
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            //sent the user to the login page

            navigate('/login', {state: {from: location}})
          }
        });
      }
  
    }


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white text-xl p-2 rounded-sm">${price}</p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name} </h2>
        <p>{recipe} </p>
        <div className="card-actions justify-end">
          <button 
           onClick={()=> handleAddCart(item)}
           className="btn btn-outline border-0 bg-slate-100 border-orange-400 text-orange-400 border-b-4 mt-4">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
