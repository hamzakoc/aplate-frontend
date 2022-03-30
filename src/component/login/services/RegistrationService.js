import axios from 'axios';
import bcrypt from 'bcryptjs';




const base_url = "https://aplate-api.herokuapp.com/"

export const UserRegistration = async data => {
    // const password = data.password;
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(password, salt);

    // data["password"] = hash;

    const res = await axios.post(base_url + "api/admins", data);
    return res.status;
};

export const UsernameValidation = data => (
    axios.post(base_url + 'validateUserName', data)
        .then(exist => exist.status)
)