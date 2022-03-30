import axios from 'axios';


const base_url = "https://aplate-api.herokuapp.com/"



const LoginService = data => (
    axios.post(base_url + 'login/', data)
        .then(res => res.status)
)

export default LoginService;