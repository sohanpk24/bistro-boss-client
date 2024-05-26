import { FaTrashAlt } from "react-icons/fa";
import useCard from "../../../hooks/useCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCard();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure()

  const handleDelete = id =>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
      
        axiosSecure.delete(`/carts/${id}`)
        .then(res => {
          if(res.data.deletedCount > 0){
            refetch()
              Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
          }
        })
      }
    });

  }


  return (
    <div>
      <div className="flex justify-evenly">
        <h3 className="text-4xl">Items: {cart.length}</h3>
        <h3 className="text-4xl">Total Price: {totalPrice}</h3>
        <button className="btn btn-primary">pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th className="text-xl">
                #
              </th>
              <th className="text-xl">Image</th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            

            {
                cart.map((item, index)=> <tr key={item._id}>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td className="font-semibold text-xl">
                      {
                        item.name
                      }
                    </td>
                    <td  className="font-semibold text-xl">
                      ${item.price}
                    </td>
                    <th>
                      <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-500">
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </th>
                  </tr> )
            }



           
           
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
