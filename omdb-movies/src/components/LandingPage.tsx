import React, { useState} from "react";
import netflix_logo from "../assets/netflix_logo.jpg";
import bg_image from "../assets/bg_image.jpg";
import Modal from "./Modal";
import SignInForm from "./SignInForm";

type LandingPageProps = {

}
const LandingPage : React.FC<LandingPageProps> =  () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col fixed inset-0 opacity-85"
            style={{ backgroundImage: `url(${bg_image})`}}>


            <div className="flex justify-between items-center p-6">
                <img src={netflix_logo} alt="netflix_logo" className="w-32" />
                <button
                    className="text-white text-lg font-semibold cursor-pointer bg-red-600 rounded-xl p-4"
                    onClick={() => {
                        setIsOpen(true)
                    }}
                >
                    Sign In
                </button>
            </div>

            {!isOpen ?
            <div className="flex flex-col justify-center items-center text-center px-6">
                <p className="text-5xl md:text-7xl text-white font-extrabold max-w-3xl">
                    Unlimited movies, TV shows and more
                </p>
                <p className="text-white text-xl">Watch anywhere. Cancel anytime.</p>
                <p className="text-white text-lg">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                <div className="flex flex-col sm:flex-row items-center mt-4 gap-4">
                    <input
                        className="bg-white px-4 py-3 w-80 rounded-md outline-none"
                        type="text"
                        placeholder="Email address"
                    />
                    <button className="bg-red-600 text-white px-6 py-3 rounded-md font-bold hover:bg-red-700">
                        Get Started
                    </button>
                </div>
            </div>
            : null
            }

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <SignInForm />
            </Modal>
        </div>
    );
};

export default LandingPage;
