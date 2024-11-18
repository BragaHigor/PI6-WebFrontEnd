import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})


export class UserService {
    static async getUser(slug: string) {
        return axiosInstance.get(`/user/${slug}`).then(res => res.data);
    }
}

export class PostService {
    static async getPosts() {
        return axiosInstance.get(`/feed`).then(res => res.data);
    }
}