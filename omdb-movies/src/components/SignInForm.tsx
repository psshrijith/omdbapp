import React, {useState} from "react";

type SignInFormProps = {
    onSubmit: (credentials: {email: string, password: string}) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({onSubmit}: SignInFormProps) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({email, password})
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6">
            <p className="flex text-white text-5xl font-bold justify-self-start pb-4">Sign In</p>
            <input
                className="border-white border-2 text-white h-12 rounded-lg p-1"
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

            <input
                className="border-white border-2 text-white h-12 rounded-lg p-1"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />

            <button
                className="bg-red-600 h-12 rounded-lg"
                type="submit"
                onClick={() => handleSubmit}
                >
                Sign In
            </button>
        </form>
    )
}

export default SignInForm;