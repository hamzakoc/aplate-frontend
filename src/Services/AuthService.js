import axios from 'axios';
const base_url = 'http://localhost:5000/';

export default {



    login: user => {
        console.log(user);
        return fetch(base_url + 'login', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: { username: "", role: "" } };
        })
    },

    register: user => {
        console.log(user);
        return fetch(base_url + 'register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },



    logout: () => {
        return fetch(base_url + 'logout')
            .then(res => res.json())
            .then(data => data);
    },



    isAuthenticated: () => {
        return fetch(base_url + 'authenticated')
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data);
                else
                    return { isAuthenticated: false, user: { username: "", role: "" } };
            });
    }

}