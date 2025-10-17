
const userName=import.meta.env.VITE_USERNAME;
const passWord = import.meta.env.VITE_PASSWORD;

export const validateUser = (username:string,password:string ): boolean => {
    return username===userName && password===passWord;
}