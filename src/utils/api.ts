import axios from "axios";

const BASE_URL = 'https://api.github.com';

export const api = {
    getUserProfile: async (username: string) => {
        return await axios.get(`${BASE_URL}/users/${username}`)
            .then(reposnse => reposnse.data)
            .catch( err => console.error(err))
    },

    getUserRepos: async (username: string) => {
        return await axios.get(`${BASE_URL}/users/${username}/repos`)
            .then(reposnse => reposnse.data)
            .catch( err => console.error(err))
    },

    getDate: (date: string) => {
        return new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }
}