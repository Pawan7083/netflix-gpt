const checkValid = (email,password)=>{
    const emailRegax=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegax=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if(!emailRegax.test(email))
        return "email is not volid";

    if(!passwordRegax.test(password))
        return "password is not valid"

    return null;


}

export default checkValid;