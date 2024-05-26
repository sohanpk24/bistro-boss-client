import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle className="top-0"
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                type="text"
                placeholder="Recipe Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </label>
            <div className="flex gap-6">
              {/* category */}
              <label className="form-control w-full my-4">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full "
                >
                  <option disabled selected>
                    Select a category?
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>

              {/* price */}
              <label className="form-control w-full my-4">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            {/* recipe details */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>
            <div className="form-control my-4">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>

            <div className="flex justify-center items-start text-center">
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                Add Item <FaUtensils></FaUtensils>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
