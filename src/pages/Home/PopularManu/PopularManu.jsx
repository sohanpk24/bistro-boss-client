
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularManu = () => {

    const [menu]= useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular Items"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">

                {
                    popular.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>

            <div className="flex justify-center items-center">
                <button className="btn btn-outline border-0 text-xl text-yellow-400 border-b-4 mt-4">View full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularManu;