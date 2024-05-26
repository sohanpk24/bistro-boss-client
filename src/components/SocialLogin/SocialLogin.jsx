
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                console.log(res.data);
                navigate('/')
            })
        })
    }


    return (
        <div className="px-8 py-4">
        <button onClick={handleGoogleSignIn} className="btn btn-block text-xl">
        <FcGoogle  className="text-xl"/>
          Google
        </button>
        </div>        
            

    );
};

export default SocialLogin;