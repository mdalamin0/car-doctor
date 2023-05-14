import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="flex justify-center">
            <button onClick={handleGoogleSignIn} className="bg-slate-300 h-[50px] flex justify-center items-center rounded-full w-[50px]">
                <img className="h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
            </button>
        </div>
    );
};

export default SocialLogin;