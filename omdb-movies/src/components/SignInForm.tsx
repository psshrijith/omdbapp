import React, {useState} from "react";
import {validateUser} from "../utils/validateUser";
import {useNavigate} from 'react-router-dom';

interface SignInFormProps {
    onLoginSuccess: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(validateUser(email, password)) {
            setError("");
            localStorage.setItem("isLoggedIn", "true");
            onLoginSuccess();
            navigate("/browse");
        }
        else{
            setError("Invalid Credentials")
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6">
            <p className="flex text-white text-5xl font-bold justify-self-start pb-4">Sign In</p>

            {error && (
                <p className="text-red-600">{error}</p>
                )}

            <input
                className="border-white border-2 text-white h-12 rounded-lg p-1 bg-transparent"
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

            <input
                className="border-white border-2 text-white h-12 rounded-lg p-1 bg-transparent"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />

            <button
                className="bg-red-600 h-12 rounded-lg text-white font-semibold hover:bg-red-700"
                type="submit"
                >
                Sign In
            </button>
        </form>
    )
}

export default SignInForm;