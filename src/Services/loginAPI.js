import axios from 'axios';

const baseURL = "https://6311c5a7f5cba498da853924.mockapi.io/vcube/api/users";

export const loginService = (data) =>
    axios.get(baseURL).then(res => {
        const filterUsers = res.data.filter(item => 
            item.email === data?.email && item.password === data?.password
        );
        const user = filterUsers && filterUsers.length > 0 && filterUsers[0];
        return { ...res, data: user };
    });






























    