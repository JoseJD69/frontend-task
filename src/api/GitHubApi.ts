import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/v1';




export const getRepositories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/github/repositories`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
export const getCommitsByRepo = async (repoName: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/commits/${repoName}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}